import React from "react";
import { Search } from "lucide-react";
import AIChatbotPopup from "../../Components/AIChatbotPopup";

const SearchBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0E4456",
          padding: "8px 16px",
          borderRadius: "50px",
          width: "50%",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            flex: 1,
            border: "none",
            backgroundColor: "transparent",
            color: "white",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <Search color="white" size={18} />
      </div>
    </div>
  );
};

const InputBox = ({ placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "8px",
        backgroundColor: "#B1BCBF",
        border: "none",
        outline: "none",
        fontSize: "13px",
        borderRadius: "6px",
        marginBottom: "10px",
      }}
    />
  );
};

const HelpCard = ({ title, content }) => {
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: "8px",
        padding: "20px",
        width: "220px",
        minHeight: "260px",
        color: "#0E4456",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <div style={{ fontSize: "14px", color: "#0E4456" }}>{content}</div>
    </div>
  );
};

const ProblemForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: "8px",
        padding: "20px",
        width: "250px",
        minHeight: "260px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <input
        type="email"
        placeholder="Enter your email here"
        style={{
          width: "100%",
          padding: "8px",
          backgroundColor: "#B1BCBF",
          border: "none",
          outline: "none",
          fontSize: "13px",
          borderRadius: "6px",
        }}
      />
      <textarea
        placeholder="Type your Problem here"
        rows="5"
        style={{
          width: "100%",
          padding: "8px",
          backgroundColor: "#B1BCBF",
          border: "none",
          outline: "none",
          fontSize: "13px",
          resize: "none",
          borderRadius: "6px",
        }}
      ></textarea>
    </div>
  );
};

const HelpSection = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "25px",
          fontWeight: "400",
        }}
      >
        Hi, How can we help ?
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <HelpCard
          title="Contact us"
          content={
            <>
              <InputBox placeholder="Enter phone number" type="tel" />
              <InputBox placeholder="Enter email" type="email" />
            </>
          }
        />
        <HelpCard
          title="FAQs"
          content={
            <>
              <InputBox placeholder="Enter your question" />
              <div style={{ textAlign: "center", marginTop: "60px" }}>● ● ●</div>
            </>
          }
        />
        <ProblemForm />
      </div>
    </div>
  );
};

const HelpCenter = () => {
  return (
    <div
      style={{
        backgroundColor: "#6F8F99",
        minHeight: "100vh",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <SearchBar />
      <HelpSection />
      <AIChatbotPopup />
    </div>
  );
};

export default HelpCenter;
