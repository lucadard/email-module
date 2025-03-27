import React from "react";
import {
  Button,
  Column,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import assets from "@/common/assets";
import constants from "@/common/constants";

export const Footer = () => (
  <Section className="bg-[#5353F5] py-6 px-4 rounded-b-[12px] text-white">
    <Row className="mb-0">
      <Column>
        <Img
          className="h-[31px] w-[189px] object-cover mx-3"
          src={assets.contactWithUsFooter}
        />
      </Column>
      <Column>
        <Row className="w-min" align="right">
          <Column align="right" className="size-5 pr-6">
            <Button href={constants.linkedinUrl}>
              <Img
                className="size-5 object-cover"
                src={assets.linkedinLogo}
                alt="LinkedIn"
              />
            </Button>
          </Column>
          <Column align="right" className="size-5">
            <Button href={constants.instagramUrl}>
              <Img
                className="size-5 object-cover"
                src={assets.instagramLogo}
                alt="Instagram"
              />
            </Button>
          </Column>
        </Row>
      </Column>
    </Row>
    <Row>
      <Column className="text-[8px] font-[400]">Our mailing address is:</Column>
      <Column
        className="text-[8px] font-[400] text-right hidden md:block"
        align="right"
      >
        {constants.mailingAddress}
      </Column>
    </Row>
    <Text className="text-[8px] font-[400] md:hidden !my-0 text-decoration-none">
      {constants.mailingAddress}
    </Text>
  </Section>
);
