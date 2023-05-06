import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

type Props = {};

import Container from "@layouts/Container";
import { Heading_1, Paragraph } from "@components/Tech/Typography_Tech";

// Icons
import { MdContentCopy } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export default function Open_Graph({}: Props) {
  const [isSaved, setIsSaved] = useState<[string, boolean]>(["Copy", false]);
  // Inputs
  const [title, setTitle] = useState("Ali Reza - Portfolio");
  const [description, setDescription] = useState(
    "As a front-end developer, I specialize in building and maintaining the user interface of web applications."
  );
  const [website, setWebsite] = useState("alirezasamadi.com");
  const [image, setImage] = useState("https://i.ibb.co/9hyw1rL/Meta-Tag.png");

  // Platforms
  const [platforms, setPlatforms] = useState<
    "facebook" | "twitter" | "linkedin" | "discord"
  >("facebook");

  const copyFunction = () => {
    navigator.clipboard.writeText(`
  <!-- HTML Meta Tags -->
  <title>${title}</title>
  <meta name="description" content="${description}">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="${website}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="${website}">
  <meta property="twitter:url" content="${website}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
    `);
    setIsSaved(["Copied", true]);
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });

    setTimeout(() => {
      setIsSaved(["Copy", false]);
    }, 3000);
  };

  return (
    <Container className="py-12">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        meta-tags
      </small>

      <Heading_1>Open Graph</Heading_1>
      <Paragraph margin={true}>
        The Open Graph protocol enables any web page to become a rich object in
        a social graph. For instance, this is used on Facebook to allow any web
        page to have the same functionality as any other object on Facebook.
      </Paragraph>
      <Paragraph>
        To turn your web pages into graph objects, you need to add basic
        metadata to your page. We&apos;ve based the initial version of the
        protocol on RDFa which means that you&apos;ll place additional{" "}
        <span className="text-white">&lt;meta&gt;</span> tags in the{" "}
        <span className="text-white">&lt;head&gt;</span> of your web page.
      </Paragraph>

      {/* Workplace */}
      <section className="grid items-start gap-4 mt-12 md:grid-cols-2">
        <div className="p-6 border rounded-lg border-white-low-opacity">
          <h4 className="text-3xl font-semibold text-white">Edit</h4>
          <p className="mt-2">
            This information will be displayed on Google and social media.
          </p>
          {/* Inputs */}
          <div className="mt-8 space-y-4">
            <label htmlFor="title" className="flex flex-col gap-1">
              <span className="text-lg text-white">Title</span>
              <input
                type="text"
                placeholder="Ali Reza | Portfolio"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
              />
              <small>
                <span className="text-white/80">Recommended</span>: 60
                characters
              </small>
            </label>
            <label htmlFor="website" className="flex flex-col gap-1">
              <span className="text-lg text-white">Website</span>
              <input
                type="url"
                placeholder="https://"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
              />
            </label>
            <label htmlFor="title" className="flex flex-col gap-1">
              <span className="text-lg text-white">Description</span>
              <textarea
                id="title"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
              />
              <small>
                <span className="text-white/80">Recommended</span>: 155 - 160
                characters
              </small>
            </label>
            <label htmlFor="image" className="flex flex-col gap-1">
              <span className="text-lg text-white">Image</span>
              <input
                type="url"
                placeholder="https://"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="p-2 bg-transparent border rounded-md outline-none border-white-low-opacity focus:border-primary placeholder:opacity-50"
              />
            </label>
          </div>
          <button
            onClick={copyFunction}
            className={`flex items-center gap-2 px-3 py-2 mt-7 text-white rounded-md ${
              isSaved[1] ? "bg-green-600" : "bg-primary"
            }`}
          >
            {isSaved[1] ? <BsFillClipboard2CheckFill /> : <MdContentCopy />}
            {isSaved[0]}
          </button>
        </div>
        <div>
          {/* Buttons for selecting platforms */}
          <div className="mb-4">
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                platforms == "facebook" && "bg-button text-white"
              }`}
              onClick={() => setPlatforms("facebook")}
            >
              facebook
            </button>
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                platforms == "twitter" && "bg-button text-white"
              }`}
              onClick={() => setPlatforms("twitter")}
            >
              twitter
            </button>
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                platforms == "linkedin" && "bg-button text-white"
              }`}
              onClick={() => setPlatforms("linkedin")}
            >
              linkedin
            </button>
            <button
              className={`px-4 py-1 text-sm rounded-full ${
                platforms == "discord" && "bg-button text-white"
              }`}
              onClick={() => setPlatforms("discord")}
            >
              discord
            </button>
          </div>
          {platforms == "facebook" ? (
            <div className="bg-[#3a3b3c] duration-200 text-white">
              <motion.img
                layoutId="image"
                className="object-cover aspect-video"
                src={image}
              />
              <div className="px-4 py-1 pb-2 -space-y-1">
                <small className="font-light uppercase opacity-60">
                  www.{website}
                </small>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="font-light text-sm/5 opacity-60">{description}</p>
              </div>
            </div>
          ) : platforms == "twitter" ? (
            <div className="overflow-hidden duration-200 rounded-2xl">
              <motion.img
                layoutId="image"
                className="object-cover aspect-video"
                src={image}
              />
              <div className="px-4 py-1 pb-2 -space-y-1 border-2 border-t-0 border-white-low-opacity rounded-b-2xl">
                <small className="font-light uppercase opacity-60">
                  www.{website}
                </small>
                <h3 className="text-white">{title}</h3>
                <p className="font-light text-sm/5 opacity-60">{description}</p>
              </div>
            </div>
          ) : platforms == "linkedin" ? (
            <div className="text-white duration-200 bg-slate-700">
              <motion.img
                layoutId="image"
                className="object-cover aspect-video"
                src={image}
              />
              <div className="px-4 py-1 pb-2">
                <h3>{title}</h3>
                <small className="font-light">www.{website}</small>
              </div>
            </div>
          ) : platforms == "discord" ? (
            <div className="bg-[#25272b] p-4 duration-200 rounded-md border-l-2 border-[#1c1e21]">
              <div className="py-1 pb-2 mb-2">
                <h3 className="font-semibold text-lg/8 text-sky-600">
                  {title}
                </h3>
                <p className="text-white">{description}</p>
              </div>
              <motion.img
                layoutId="image"
                className="object-cover aspect-video"
                src={image}
              />
            </div>
          ) : (
            <div>
              <h1>Error</h1>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
