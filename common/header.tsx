import React from "react";
import { Img, Section } from "@react-email/components";
import assets from "@/common/assets";

export const Header = () => (
  <Section className="bg-primary rounded-t-xl overflow-hidden object-cover">
    <Img src={assets.betternessBanner} className="w-full h-20" />
  </Section>
);
