import connectMongo from "@/dbConnect/connectMongo";
import { bookingModel } from "@/models/booking-model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { hotelId, userId, checkin, checkout } = await request.json();

  await connectMongo();

  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout
  };

  try {
    await bookingModel.create(payload);
    return new NextResponse("A New Booking has been made", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};