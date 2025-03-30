import Image from "next/image"
import { Shield, Key, Fingerprint, FileText } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                TrustChain Features
              </h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Explore our comprehensive suite of decentralized identity management tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">
                  Decentralized Identity Platform
                </h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our decentralized identity platform leverages blockchain technology to create a secure, immutable record
                of your digital identity. Unlike traditional centralized systems, your identity data is distributed
                across the network, eliminating single points of failure and reducing the risk of data breaches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Blockchain-based identity storage</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Distributed architecture eliminates single points of failure</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Cryptographically secured identity data</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Interoperable with existing identity systems</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Decentralized Identity Platform"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="SSI Wallet"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Key className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">
                  Self-Sovereign Identity Wallet
                </h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our SSI Wallet puts you in complete control of your digital identity. You decide what information to
                share, with whom, and for how long. The wallet stores your verifiable credentials securely and allows
                for selective disclosure, ensuring your privacy is maintained at all times.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Selective disclosure of identity attributes</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>User-controlled identity sharing</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Secure storage of verifiable credentials</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Mobile and desktop compatibility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Fingerprint className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Passwordless Login</h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                Say goodbye to password-related vulnerabilities. TrustChain's passwordless login system uses
                cryptographic keys and biometric verification to provide secure authentication without exposing
                sensitive data. This approach eliminates the risks associated with password theft, reuse, and phishing
                attacks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Cryptographic key-based authentication</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Biometric verification options</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Phishing-resistant authentication</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Integration with existing authentication systems</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Passwordless Login"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4 */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Immutable Audit Trails"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">
                  Immutable Audit Trails
                </h2>
              </div>
              <p className="text-gray-500 md:text-xl/relaxed">
                TrustChain's immutable audit trails provide transparent, tamper-proof logs of all identity transactions.
                This ensures accountability and traceability, allowing you to monitor how your identity is being used
                while maintaining compliance with regulatory requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Blockchain-based transaction logs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Tamper-proof record of identity usage</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>Regulatory compliance support</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p>User-accessible activity monitoring</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

