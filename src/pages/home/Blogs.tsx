import img1 from "/images/blog1.jpg";
import img2 from "/images/blog2.jpg";
import img3 from "/images/blog3.jpg";
import img4 from "/images/blog4.jpg";
import img5 from "/images/blog5.jpg";
import img6 from "/images/blog6.jpg";
import BlogCard from "../../components/cards/BlogCard";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-sky-100">
      <div className=" flex flex-col items-center  justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-center">
            Contacts
          </h1>
          <p className="mt-2 text-center lg:text-right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <BlogCard img={img6} headlines="Skin Health 101" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
