"use client";

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

export const LandingContent = () => {
  const testimonials = [
    {
      name: "Jim",
      title: "Salesman",
      description:
        "Great chatbot, I can't stop using it. I can't imagine browsing the web without it now!",
    },

    {
      name: "Pam",
      title: "Salesman",
      description:
        "This chatbot is absolutely mind-blowing! It's like having a genius on tap.",
    },
    {
      name: "Creed",
      title: "Salesman",
      description:
        "I don't know how I survived without this chatbot before. It's like having a virtual companion that knows everything. ",
    },
    {
      name: "Oscar",
      title: "Accountant",
      description:
        "I'm convinced this chatbot is secretly from the future! It anticipates my questions with incredible accuracy and offers solutions that are out of this world.",
    },
  ];

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Our Customers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.name} className="bg-white/10 border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Avatar className="h-8 w-8 border border-white flex items-center justify-center">
                  <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg ">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
