import React from "react";
import { Header } from "../components/Common/Header";
import { ServiceCard } from "../components/Services/ServiceCard";
// import { InfoCard } from "../components/Information/InfoCard";
// import { SecondaryButton } from "../components/Common/SecondaryButton";
import { Parallex } from "../components/Common/Parallax";
import { TestimonialCard } from "../components/Testimonials/TestimonialCard";
import { PrimaryButton } from "../components/Common/PrimaryButton";
import { Title } from "../components/Common/Title";

import testimonials from "../data/HomePage/Testimonials.json";
import services from "../data/HomePage/Services.json";

export const Home = () => {
  return (
    <>
      <Header
        image="https://media-public.canva.com/1NqLM/MAEaV41NqLM/1/s3.jpg"
        title="Elevate Your Coaching Journey with Us"
        subtitle="Unlock exclusive opportunities to connect, grow, and get to lead worldwide coaching initiatives."
        buttontext="Join Us"
      />
      <div
        style={{
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Title title="Featured Services" center={true} subtitle="Our Services" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            overflow: "visible",
          }}
        >
          <ServiceCard
            image="https://img1.wsimg.com/isteam/ip/fede63ad-1e58-4f64-9dfc-1618f05f64c1/screen_2x%20(2).webp/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:776,h:388,cg:true"
            title="Career Coaching"
            caption="Develop a clear career vision, navigate transitions, and build the skills and confidence to achieve your career goals."
          />
          <ServiceCard
            image="https://img1.wsimg.com/isteam/ip/fede63ad-1e58-4f64-9dfc-1618f05f64c1/screen_2x.webp/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.98%25/rs=w:776,h:388,cg:true"
            title="Leadership Coaching"
            caption="Enhance your leadership skills, communication style, and ability to motivate and inspire your team. "
          />
          <ServiceCard
            image="https://img1.wsimg.com/isteam/ip/fede63ad-1e58-4f64-9dfc-1618f05f64c1/come-to-be-coaching-public-speaking-coaching.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:776,h:388,cg:true"
            title="Public Speaking Coaching"
            caption="Improve your well-being, build resilience, and create a more balanced and fulfilling life. "
          />
        </div>
      </div>

      <div
        style={{
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Title title="Latest Blogs" center={true} subtitle="From the Blogs" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            overflow: "visible",
          }}
        >
          {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          caption={service.caption}
        />
      ))}
        </div>
      </div>

      {/* <div
          style={{
            padding: "80px 20px",
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            // flexWrap: "wrap",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <p style={{ fontSize: "40px", lineHeight: "1.4" }}>
              About Come To Be Coaching
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.4" }}>
              Welcome and thanks for your interest in CTB’s ICF Accredited Coach
              Education! We are thrilled to offer both Level 1 and Level 2
              certifications.
              <br />
              <br />
              We look forward to engaging with you to understand your
              requirements. Our modular approach enables us create tailored
              solutions to help you design your journey.{" "}
            </p>
            <SecondaryButton label="Learn More" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <InfoCard
              title="Global Certificate"
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
              type={2}
            />
            <InfoCard
              title="Global Certificate"
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
              type={2}
            />
            <InfoCard
              title="Global Certificate"
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
              type={2}
            />
            <InfoCard
              title="Global Certificate"
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
              type={2}
            />
          </div>
        </div> */}

      <Parallex
        image="https://media-public.canva.com/XMcrY/MAEaVwXMcrY/1/s3.jpg"
        title="Enhance your skills with best courses"
        subtitle="Unlock exclusive opportunities to connect, grow, and get to lead worldwide coaching initiatives."
        buttontext="Join Us"
        buttontext2="Learn More"
      />

      <div
        style={{
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Title title="Testimonials" center={true} subtitle="What Our Students Say" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            overflow: "visible",
          }}
        >
         {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          caption={testimonial.caption}
        />
      ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton label="Read More" />
        </div>
      </div>
    </>
  );
};