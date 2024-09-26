"use client";
import React from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { TextArea } from "@/components/ui/textArea";
import { DirectionAwareHoverDemo } from "./socialMedia";
import { toast } from "../toast/use-toast";

interface ContactProps {
  id: string;
}

export default function Contact({ id }: ContactProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use FormData to gather input values
    const formData = new FormData(e.currentTarget);
    const data = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate if any field is empty
    if (!data.firstname || !data.lastname || !data.email || !data.message) {
      // Show an error toast if fields are missing
      toast({
        title: "Error",
        description: "Please fill all the fields before submitting.",
      });
      return; // Stop form submission
    }

    try {
      const response = await fetch("api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Success toast
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
      } else {
        // Error toast if email sending failed
        toast({
          title: "Error",
          description: "Failed to send email. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error occurred while sending the email:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending the email.",
      });
    }
  };

  const socialLinks = [
    {
      icon: IconBrandGithub,
      text: "GitHub",
      link: "https://github.com/spynav",
      imageUrl:
        "https://media.printables.com/media/prints/207008/images/1903354_02ddf438-2032-4173-b50c-de1a6b8c1265/thumbs/inside/1280x960/png/github-logo-2.webp", // Replace with actual GitHub image URL
    },
    {
      icon: IconBrandInstagram,
      text: "Instagram",
      link: "https://www.instagram.com/nav_ch._/",
      imageUrl:
        "https://media.istockphoto.com/id/1278996256/vector/camera-icon-simple-style-isolated-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=nmJsi4AIImCMPD_hyNDb8kLhO1iDRcbW-haTBcByOJo=", // Replace with actual Google image URL
    },
    {
      icon: IconBrandLinkedin,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/navindu-chathuranga-178253265/",
      imageUrl:
        "https://img.freepik.com/premium-vector/icon-vector-linkedin-with-circle-background-plus-shadow-it_967223-1742.jpg?semt=ais_hybrid  ", // Replace with actual OnlyFans image URL
    },
    {
      icon: IconBrandHackerrank,
      text: "HackerRank",
      link: "https://www.hackerrank.com/profile/spynavindu",
      imageUrl:
        "https://atlas-content-cdn.pixelsquid.com/stock-images/black-symbol-code-logo-Q99A9r7-600.jpg", // Replace with actual Google image URL
    },
  ];

  return (
    <div
      id={id}
      className="w-full bg-white dark:bg-neutral-950 md:px-10 py-0 border-1 pb-28"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Contact
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Feel free to reach out for collaboration, inquiries, or just to say
          hello. You can contact me via email or connect with me on social media
          through the links below.
        </p>
      </div>
      <div className="max-w-5xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border-2 border-themeColor">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get in touch
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Simply email me or use my social media accounts.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Mike"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Tyson"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="mike@gmail.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" placeholder="Hey !" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-slate-900 dark:to-slate-900 to-neutral-600 block dark:bg-slate-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--slate-800)_inset,0px_-1px_0px_0px_var(--slate-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </form>

        {/* Social Media Links */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-4 mt-8">
          {socialLinks.map((link) => (
            <DirectionAwareHoverDemo
              key={link.text}
              Icon={link.icon}
              text={link.text}
              imageUrl={link.imageUrl}
              link={link.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-black to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
