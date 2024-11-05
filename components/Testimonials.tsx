import Image from "next/image";

const testimonials = [
  [
    {
      content:
        "Just had early access to this and it's amazing. The TikTok videos created are hilarious.",
      //link: "https://twitter.com/rauchg/status/1612233034622984192",
      author: {
        name: "Stephanie Reich",
        role: "CEO at ViMedia",
      },
    },
    {
      content:
        "There are so many most advanced AI technologies applied here, voice clone, lip-sync, ChatGPT combined together to make amazing products.",
      //link: "https://twitter.com/cramforce/status/1612496954218672128",
      author: {
        name: "Matt Urich",
        role: "CTO at TubeView",
      },
    },
  ],
  [
    {
      content:
        "I just used it and am extremely impressed with the   functionality and wanted to express my appreciation for the excellent design. Keep up the great work!",
      //link: "https://twitter.com/phar_whaz/status/1612498030627852309",
      author: {
        name: "Adam Leigh",
        role: "Web Designer",
      },
    },
    {
      content:
        "Turning imagess into a talking avatar with any chosen speaking voice is just damn cool. Works like magic",
      //link: "https://twitter.com/sergvind/status/1612610058369515521",
      author: {
        name: "Sergei Vanderbilt",
        role: "CCO at Tinde",
      },
    },
  ],
  [
    {
      content:
        "I've just used it and damn I'll keep coming back! This is so good. Great work!",
      //link: "https://twitter.com/Himanil_Gole/status/1612510385504157697",
      author: {
        name: "Helen Cole",
        role: "Designer & Founder at COBRA",
      },
    },
    {
      content:
        "Wow, thank you! Tried a few and love it! Got lots of likes on my Instagram posts!",
      //link: "https://twitter.com/rod_ellison/status/1612513333302775809",
      author: {
        name: "Anne Ellison",
        role: "Youtuber",
      },
    },
  ],
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto md:text-center">
          <h1 className="testimonial-header mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal  sm:text-6xl">
            Loved By Many Worldwide.
          </h1>
          <p className="testimonial-sub mx-auto mt-6 max-w-xl text-lg leading-7">
            See what our 100,000+ users are saying about the product.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >

                    <figure className="testimonial-card relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-white">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-white">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-white">
                            {testimonial.author.role}
                          </div>
                        </div>

                      </figcaption>
                    </figure>

                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
