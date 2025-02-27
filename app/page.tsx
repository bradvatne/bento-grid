import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bento-grid">
        <div className="bento-a">
          <p className="text-preset-2">
            Create and schedule content{" "}
            <span className="italic text-dark-purp">quicker.</span>
          </p>
          <button>
            <Image
              width={382}
              height={182}
              src="/images/illustration-create-post.webp"
              alt="Create Post Button"
              className="w-[190px] height-[90px]"
            />
          </button>
        </div>
        <div className="bento-b inner-bento">
          <div className="inner-a text-preset-1">
            <p className="social-media">
              Social Media <span className="text-dark-yellow">10x</span>{" "}
              <span className="italic">Faster</span> with AI
            </p>
            <Image
              width={384}
              height={64}
              src="/images/illustration-five-stars.webp"
              alt="Five Star Rating Image"
            />
            <p className="text-preset-4 text-white">
              Over 4,000 5-star reviews
            </p>
          </div>
          <div className="inner-b">
            <img
              src="/images/illustration-multiple-platforms.webp"
              alt="Multiple Platforms Illustration"
              className="platform-image"
            />
            <p className="text-preset-3">
              Manage multiple accounts and platforms.
            </p>
          </div>
          <div className="inner-c">
            <p className="text-preset-3">
              Maintain a consistent posting schedule.
            </p>
            <img
              src="/images/illustration-consistent-schedule.webp"
              alt="Calendar Illustration"
            />
          </div>
        </div>
        <div className="bento-c">c</div>
        <div className="bento-d">d</div>
        <div className="bento-e">e</div>
        <div className="bento-f">f</div>
      </div>
    </main>
  );
}
