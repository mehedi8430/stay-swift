"use server";

import { signIn } from "@/auth";
import connectMongo from "@/dbConnect/connectMongo";

export async function login(formData) {
    try {
        await connectMongo();

        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
}