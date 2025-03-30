import Image from "next/image"
import { Building2, Heart, ShoppingBag, Landmark } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                TrustChain Use Cases
              </h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Discover how TrustChain is transforming digital identity across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Banking & Finance</h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                TrustChain is revolutionizing the banking industry by providing secure, efficient identity verification
                for financial transactions. Our decentralized identity platform reduces fraud, streamlines KYC
                processes, and enhances customer experience.
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Secure Transactions</h3>
                  <p>
                    TrustChain's cryptographic security ensures that financial transactions are protected against fraud
                    and identity theft.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Streamlined KYC/AML</h3>
                  <p>
                    Our verifiable credentials simplify Know Your Customer and Anti-Money Laundering processes, reducing
                    onboarding time from days to minutes.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Cross-Border Payments</h3>
                  <p>
                    TrustChain facilitates secure, efficient cross-border transactions by providing a trusted identity
                    layer that works across jurisdictions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Banking Use Case"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Healthcare Use Case"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Healthcare</h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                TrustChain is transforming healthcare by giving patients control over their medical data while enabling
                secure sharing with healthcare providers. Our platform ensures privacy, security, and interoperability
                across the healthcare ecosystem.
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Patient Data Privacy</h3>
                  <p>
                    Patients maintain ownership of their health records and can selectively share specific information
                    with healthcare providers.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Secure Provider Access</h3>
                  <p>
                    Healthcare providers can request and receive verified patient information without compromising
                    security or privacy.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Interoperable Health Records</h3>
                  <p>
                    TrustChain enables seamless sharing of health records across different healthcare systems and
                    providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">E-Commerce</h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                TrustChain is enhancing e-commerce by providing secure, frictionless identity verification for online
                transactions. Our platform reduces fraud, streamlines checkout processes, and builds trust between
                buyers and sellers.
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Fraud Prevention</h3>
                  <p>
                    TrustChain's verifiable credentials reduce payment fraud and account takeovers in e-commerce
                    transactions.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Streamlined Checkout</h3>
                  <p>
                    Our passwordless authentication simplifies the checkout process, reducing cart abandonment and
                    improving conversion rates.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Trusted Reviews</h3>
                  <p>
                    Verified digital identities ensure that product reviews come from legitimate buyers, increasing
                    trust in the marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="E-Commerce Use Case"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Government */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Government Use Case"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Landmark className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Government</h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                TrustChain is modernizing government services by providing secure, efficient digital identity solutions.
                Our platform enables seamless access to government services while ensuring privacy, security, and
                regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Digital IDs</h3>
                  <p>
                    TrustChain enables secure, verifiable digital identities for citizens, simplifying access to
                    government services.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Secure Voting</h3>
                  <p>
                    Our platform provides secure, verifiable identity verification for electronic voting systems,
                    ensuring election integrity.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Efficient Public Services</h3>
                  <p>
                    TrustChain streamlines access to public services by enabling secure, reusable identity verification
                    across government agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Other Industries</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              TrustChain's decentralized identity solutions are applicable across a wide range of industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure, verifiable academic credentials and simplified student identity management.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Streamlined claims processing and fraud prevention through verified digital identities.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Travel & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamless, secure identity verification for travel, accommodation, and loyalty programs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure property transactions and simplified identity verification for buyers, sellers, and renters.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Verified identities for all participants in the supply chain, ensuring transparency and trust.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Media & Entertainment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure content access, digital rights management, and verified creator identities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

