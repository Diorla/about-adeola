"use client";
import FadeInWhenVisible from "../home/FadeInWhenVisible";
import LandingWrapper from "./LandingWrapper";

export default function Jumbotron({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <LandingWrapper>
      <div className="flex flex-col items-center justify-center mt-28 mb-20">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold text-center">{title}</h1>
        </FadeInWhenVisible>

        {subtitle && (
          <FadeInWhenVisible>
            <h2 className="text-xl text-center mb-12">{subtitle}</h2>
          </FadeInWhenVisible>
        )}
        {children}
      </div>
    </LandingWrapper>
  );
}
