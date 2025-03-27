import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer";

const ConversationSummaryEmail = () => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Your agent had a new interaction with a user</Preview>
      <Body className="bg-zinc-50 font-sans">
        <Container className="mx-auto py-12">
          <Header />
          <Section className="text-md rounded-[5px] bg-white px-8 py-4 text-[#27282C]">
            <Text>Hi {`{name}`},</Text>
            <Text>
              Someone just interacted with your agent — the summary is ready for
              you.
            </Text>
            <Hr className="mx-0 my-[24px] mt-[12px] w-full border border-solid !border-gray-300" />
            {`{conversationSummary}`}
          </Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default ConversationSummaryEmail;
