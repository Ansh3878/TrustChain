import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                About TrustChain
              </h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Our mission is to empower individuals with self-sovereign identities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Our Mission</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                At TrustChain, our mission is to empower individuals with self-sovereign identities, giving them
                complete control over their digital presence. We believe that identity is a fundamental human right, and
                that everyone should have the ability to own, control, and share their personal information on their own
                terms.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                We are committed to building a more secure, private, and user-centric digital world where individuals
                are in control of their data, and where trust is built on transparency and verifiability rather than
                centralized authority.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-600">Our Vision</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                We envision a future where digital trust is universal and secure. A world where individuals have
                complete ownership of their digital identities, where privacy is preserved by default, and where trust
                is established through cryptographic verification rather than centralized authorities.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our vision is to create a global ecosystem of self-sovereign identity that transcends borders,
                platforms, and industries, enabling seamless, secure interactions in both the digital and physical
                worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Our Story</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="TrustChain Story"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-500">
                TrustChain was founded in 2020 by a team of cybersecurity experts, blockchain developers, and privacy
                advocates who recognized the fundamental flaws in traditional identity systems. Frustrated by the
                constant data breaches, identity theft, and privacy violations that had become commonplace in the
                digital world, they set out to create a better solution.
              </p>
              <p className="text-gray-500">
                Drawing on their diverse expertise, the founding team developed a decentralized identity platform built
                on blockchain technology. Their vision was to create a system where individuals, not corporations or
                governments, would have complete control over their digital identities.
              </p>
              <p className="text-gray-500">
                Since our founding, TrustChain has grown into a leading provider of self-sovereign identity solutions,
                serving clients across banking, healthcare, e-commerce, government, and other sectors. We remain
                committed to our founding principles of privacy, security, and user control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Our Team</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Meet the experts behind TrustChain's innovative identity solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <h3 className="font-bold">Jane Doe</h3>
              <p className="text-sm text-gray-500">Co-Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <h3 className="font-bold">John Smith</h3>
              <p className="text-sm text-gray-500">Co-Founder & CTO</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <h3 className="font-bold">Emily Johnson</h3>
              <p className="text-sm text-gray-500">Chief Security Officer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <h3 className="font-bold">Michael Chen</h3>
              <p className="text-sm text-gray-500">Head of Blockchain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Our Values</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              The principles that guide everything we do at TrustChain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Privacy by Design</h3>
              <p>
                We believe that privacy is a fundamental right. All our solutions are built with privacy as a core
                principle, not an afterthought.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">User Control</h3>
              <p>
                We are committed to giving individuals complete control over their digital identities, allowing them to
                decide what information to share and with whom.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Security First</h3>
              <p>
                We employ the highest standards of cryptographic security to protect identity data and prevent
                unauthorized access.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p>
                We believe in open, transparent systems that build trust through verifiability rather than authority.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Interoperability</h3>
              <p>
                We are committed to building solutions that work across platforms, systems, and jurisdictions to create
                a truly global identity ecosystem.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p>
                We believe that everyone deserves access to secure digital identity, regardless of their technical
                expertise, economic status, or geographic location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

