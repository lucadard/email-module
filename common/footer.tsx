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
  <Section className="bg-primary py-6 px-4 rounded-b-xl text-primary-foreground">
    <Row className="mb-0">
      <Column>
        <Img
          className="h-[31px] w-[189px] object-cover"
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
      <Column className="text-[8px]">Our mailing address is:</Column>
      <Column
        className="text-[8px] text-right hidden md:block text-white no-underline"
        align="right"
      >
        {constants.mailingAddress}
      </Column>
    </Row>
    <Text className="text-[8px] md:hidden !my-0 text-white no-underline">
      {constants.mailingAddress}
    </Text>
  </Section>
);
