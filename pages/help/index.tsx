import React, { useState } from "react";
import Layout from "../Components/L/Layout";
import Head from "next/head";
import Link from "next/link";
import ContactForm from "../Components/C/ContactForm";
import {
  RiContactsBookUploadFill,
  RiRoadMapFill,
  RiErrorWarningFill,
  RiSecurePaymentLine,
  RiFeedbackFill,
  RiDownloadCloud2Fill,
} from "react-icons/ri";
import Map from "../Components/M/Map";
import CoursesProblems from "../Components/C/CoursesProblems";
import PaymentProblems from "../Components/P/PaymentProblems";
import FeedBack from "../Components/F/FeedBack";
import DownloadingProblems from "../Components/D/DownloadingProblems";

const Help = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMapView, setIsMapView] = useState(false);
  const [isCoursesProblems, setCoursesProblems] = useState(false);
  const [isPaymentProblems, setPaymentProblems] = useState(false);
  const [isFeedBack, setFeedBack] = useState(false);
  const [isDownProblems, setDownProblems] = useState(false);

  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };
  const handleMapClick = (event: any) => {
    setIsMapView((current) => !current);
  };
  const handleCourseProblemsClick = (event: any) => {
    setCoursesProblems((current) => !current);
  };
  const handlePaymentProblemsClick = (event: any) => {
    setPaymentProblems((current) => !current);
  };
  const handleFeedbackClick = (event: any) => {
    setFeedBack((current) => !current);
  };
  const handleDownProblemClick = (event: any) => {
    setDownProblems((current) => !current);
  };

  return (
    <>
      <Head>
        <title>Help</title>
      </Head>
      <Layout>
        <div className="helpPage px-56 py-12 grid justify-center justify-items-center">
          <div className="mainTitle text-center">
            <h1 className="text-3xl font-extrabold py-2">
              How can we help you?
            </h1>
            <p>
              Need assistance or have questions? We{"'"}re here to help! Explore
              our resources, <br /> FAQs, and contact options to find the
              answers and support you need.
            </p>
          </div>

          <div className="cards w-[100%] flex flex-wrap justify-center mt-8 gap-9">
            {/* Contact Us */}
            <div
              className="card1_1 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handleClick}
            >
              <RiContactsBookUploadFill className="text-[4.25rem]" />
              <b className="cursor-context-menu">Contact Us</b>
            </div>

            {/* Onsite Map Direction */}
            <div
              className="card2 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handleMapClick}
            >
              <RiRoadMapFill className="text-[4.25rem]" />
              <b className="cursor-context-menu">Onsite Map Direction</b>
            </div>

            {/* Discuss Course Problems */}
            <div
              className="card3 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handleCourseProblemsClick}
            >
              <RiErrorWarningFill className="text-[4.25rem]" />
              <b className="cursor-context-menu">Discuss Course Problems</b>
            </div>

            {/* Payment Problems */}
            <div
              className="card4 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handlePaymentProblemsClick}
            >
              <RiSecurePaymentLine className="text-[4.25rem]" />
              <b className="cursor-context-menu">Payment Problems</b>
            </div>

            {/* Feedback */}
            <div
              className="card5 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handleFeedbackClick}
            >
              <RiFeedbackFill className="text-[4.25rem]" />
              <b className="cursor-context-menu">Feedback</b>
            </div>

            {/* Downloading Problems */}
            <div
              className="card6 hover:shadow-lg hover:shadow-[#555694] w-[220px] h-[160px] bg-blue-900 rounded-lg text-white grid justify-items-center justify-center items-center transition-all ease-in-out duration-500 py-[20px]"
              onClick={handleDownProblemClick}
            >
              <RiDownloadCloud2Fill className="text-[4.25rem]" />
              <b className="cursor-context-menu">Downloading Problems</b>
            </div>
          </div>

          {isActive && (
            <div
              className={
                isActive
                  ? "contact-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <ContactForm />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handleClick}
              >
                X
              </b>
            </div>
          )}

          {isMapView && (
            <div
              className={
                isMapView
                  ? "map-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <Map />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handleMapClick}
              >
                X
              </b>
            </div>
          )}

          {isCoursesProblems && (
            <div
              className={
                isCoursesProblems
                  ? "course-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <CoursesProblems />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handleCourseProblemsClick}
              >
                X
              </b>
            </div>
          )}

          {isPaymentProblems && (
            <div
              className={
                isPaymentProblems
                  ? "PayProb-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <PaymentProblems />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handlePaymentProblemsClick}
              >
                X
              </b>
            </div>
          )}

          {isFeedBack && (
            <div
              className={
                isFeedBack
                  ? "feedback-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <FeedBack />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handleFeedbackClick}
              >
                X
              </b>
            </div>
          )}

          {isDownProblems && (
            <div
              className={
                isDownProblems
                  ? "dwdProb-form-container absolute z-40 bg-[#3b3b3b62] w-[600px] px-[80px] py-[30px] rounded-xl"
                  : "hidden"
              }
            >
              <DownloadingProblems />
              <b
                className="bg-red-500 top-1 right-2 px-4 py-2 rounded-md cursor-pointer text-white mt-2 absolute"
                onClick={handleDownProblemClick}
              >
                X
              </b>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Help;
