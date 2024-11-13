"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import serviceList from "./serviceList";
import ServiceCard from "./ServiceCard";

export default function TabSection() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex justify-center">
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="optimization">Marketing</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {serviceList.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="development">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {serviceList
                .filter((s) => s.category.includes("development"))
                .map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="design">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {serviceList
                .filter((s) => s.category.includes("design"))
                .map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="optimization">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {serviceList
                .filter((s) => s.category.includes("marketing"))
                .map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-6">
            We specialize in tailoring our services to meet your unique
            requirements. Let&apos;s discuss your project and create a custom
            plan that fits your needs perfectly.
          </p>
          <Button size="lg">Get in Touch</Button>
        </section>
      </div>
    </div>
  );
}
