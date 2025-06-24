// route for handling waitlist applications

import { NextResponse } from "next/server";
import { DataAPIClient } from "@datastax/astra-db-ts";

const {
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  ASTRA_DB_NAMESPACE,
} = process.env;

const ASTRA_DB_WAITLIST_COLLECTION = "waitlist";

// Validate required environment variables
if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_APPLICATION_TOKEN) {
  throw new Error("Missing required environment variables.");
}

export async function POST(request) {
  const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
  const db = client.db(ASTRA_DB_API_ENDPOINT, {
    namespace: ASTRA_DB_NAMESPACE,
  });
  try {
    const { email } = await request.json();

    // Validate message
    if (!email) {
      return NextResponse.json({ error: "No email provided" }, { status: 400 });
    }
    // save the emails to a waitlist collection
    const requestsCollection = db.collection(ASTRA_DB_WAITLIST_COLLECTION);
    const doc = {
      email,
      createdAt: new Date().toISOString(),
    };
    const result = await requestsCollection.insertOne(doc);
    console.log("Email saved:", result.insertedId);

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
}
