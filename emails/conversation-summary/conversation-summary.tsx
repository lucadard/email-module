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
import tailwindConfig from "@/tailwind.config";

const ConversationSummaryEmail = () => (
  <Tailwind config={tailwindConfig}>
    <Html>
      <Head />
      <Preview>Your agent had a new interaction with a user</Preview>
      <Body className="bg-background font-sans">
        <Container className="mx-auto py-12">
          <Header />
          <Section className="text-md bg-white px-8 py-4 text-text">
            <Text>Hi {`{name}`},</Text>
            <Text>
              Someone just interacted with your agent — the summary is ready for
              you.
            </Text>
            <Hr className="mx-0 my-6 mt-3 w-full border border-solid !border-secondary" />
            {`{conversationSummary}`}
          </Section>
          <Footer />
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default ConversationSummaryEmail;
