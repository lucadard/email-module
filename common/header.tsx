import React from "react";
import { Img, Section } from "@react-email/components";
import assets from "@/common/assets";

export const Header = () => (
  <Section className="bg-[#5353F5] rounded-t-[12px] overflow-hidden">
    <Img src={assets.betternessBanner} className="w-full h-20" />
  </Section>
);
