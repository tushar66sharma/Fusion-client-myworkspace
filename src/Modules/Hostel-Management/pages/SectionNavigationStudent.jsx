import React, { useState, useEffect } from "react";
import { Group, Text, Box, Container } from "@mantine/core";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import NoticeBoard from "./all-actors/NoticeBoard";
import Complaints from "./students/Complaints";
import GuestRoomBooking from "./students/GuestRoomBooking";
import LeaveForm from "./students/LeaveForm";
import LeaveStatus from "./students/LeaveStatus";
import Fine from "./students/Fine";
import AllotedRooms from "./students/AllotedRooms"

const sections = [
  "Notice Board",
  "My Fine",
  "Leave",
  "Guest Room",
  "Complaint",
  "Alloted rooms",
];

const subSections = {
  "Leave": ["Leave Form", "Leave Status"],
  "Guest Room": ["Book Guest Room", "Booking Status"]
};

const components = {
  "Notice Board": NoticeBoard,
  "Complaint": Complaints,
  "Guest Room_Book Guest Room": GuestRoomBooking,
  "Leave_Leave Form": LeaveForm,
  "Leave_Leave Status": LeaveStatus,
  "My Fine": Fine,
  "Alloted rooms": AllotedRooms,
  // Add other components here
  // "Guest Room_Booking Status": BookingStatusComponent,
  // "Leave_Leave Form": LeaveFormComponent,
  // "Leave_Leave Status": LeaveStatusComponent,
};

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("Notice Board");
  const [activeSubSection, setActiveSubSection] = useState(null);

  useEffect(() => {
    // Auto-select the first subsection when a main section is selected
    if (subSections[activeSection]) {
      setActiveSubSection(subSections[activeSection][0]);
    } else {
      setActiveSubSection(null);
    }
  }, [activeSection]);

  const getComponentKey = () => {
    if (activeSubSection) {
      return `${activeSection}_${activeSubSection}`;
    }
    return activeSection;
  };

  const ActiveComponent = components[getComponentKey()];

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (subSections[section]) {
      setActiveSubSection(subSections[section][0]);
    } else {
      setActiveSubSection(null);
    }
  };

  return (
    <Container size="xl" p="xs">
      <Group
        spacing="xs"
        style={{ overflowX: "auto", padding: "8px 0" }}
      >
        <CaretLeft size={20} weight="bold" color="#718096" />
        {sections.map((section, index) => (
          <React.Fragment key={section}>
            <Text
              size="sm"
              color={activeSection === section ? "#4299E1" : "#718096"}
              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </Text>
            {index < sections.length - 1 && (
              <Text color="#CBD5E0" size="sm">
                |
              </Text>
            )}
          </React.Fragment>
        ))}
        <CaretRight size={20} weight="bold" color="#718096" />
      </Group>
      {subSections[activeSection] && (
        <Group spacing="xs" mt="xs">
          {subSections[activeSection].map((subSection, index) => (
            <React.Fragment key={subSection}>
              <Text
                size="sm"
                color={activeSubSection === subSection ? "#4299E1" : "#718096"}
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                onClick={() => setActiveSubSection(subSection)}
              >
                {subSection}
              </Text>
              {index < subSections[activeSection].length - 1 && (
                <Text color="#CBD5E0" size="sm">
                  |
                </Text>
              )}
            </React.Fragment>
          ))}
        </Group>
      )}
      <br />
      {ActiveComponent ? (
        <Box style={{ width: "100%", height: "calc(85vh - 56px)", overflowY: "auto" }}>
          <ActiveComponent />
        </Box>
      ) : (
        <Text>Content for {activeSubSection || activeSection}</Text>
      )}
    </Container>
  );
}