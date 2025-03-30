import Image from "next/image"
import { Database, Code, Shield, Lock, HardDrive, Key, Cloud } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our Technology Stack
              </h1>
              <p className="max-w-[700px] text-blue-100 md:text-xl/relaxed">
                Powered by cutting-edge technologies to deliver secure, scalable, and user-controlled digital
                identities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Platforms */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Blockchain Platforms</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our decentralized identity solutions are built on top of industry-leading blockchain platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Ethereum"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Ethereum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A decentralized, open-source blockchain with smart contract functionality.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Polygon"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Polygon</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A protocol and framework for building and connecting Ethereum-compatible blockchain networks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Hyperledger"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Hyperledger</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An open-source collaborative effort to advance cross-industry blockchain technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decentralized Identity Frameworks */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">
                Decentralized Identity Frameworks
              </h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We leverage established identity standards to ensure interoperability and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="W3C DIDs"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>W3C DIDs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Decentralized Identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized
                  digital identity.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="Sovrin" width={80} height={80} className="mb-2" />
                <CardTitle>Sovrin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A decentralized global public network enabling self-sovereign identity on the internet.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="uPort" width={80} height={80} className="mb-2" />
                <CardTitle>uPort</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An open identity system that allows users to register their own identity on Ethereum.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Contracts */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Smart Contracts</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our platform utilizes smart contracts to automate and secure identity transactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Solidity"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Solidity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An object-oriented programming language for implementing smart contracts on various blockchain
                  platforms.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Hyperledger Fabric"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Hyperledger Fabric</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A permissioned blockchain infrastructure providing a modular architecture with a delineation of roles
                  between nodes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero-Knowledge Proofs */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Lock className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Zero-Knowledge Proofs</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Advanced cryptographic techniques that allow one party to prove to another that a statement is true
              without revealing any additional information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="zk-SNARKs"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>zk-SNARKs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge that allow for verification without
                  revealing underlying data.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="zk-STARKs"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>zk-STARKs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Zero-Knowledge Scalable Transparent Arguments of Knowledge that are quantum-resistant and require no
                  trusted setup.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decentralized Storage */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <HardDrive className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Decentralized Storage</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Secure, distributed storage solutions for identity data and credentials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="IPFS" width={80} height={80} className="mb-2" />
                <CardTitle>IPFS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  InterPlanetary File System, a protocol designed to create a content-addressable, peer-to-peer method
                  of storing and sharing data.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Filecoin"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Filecoin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An open-source, public cryptocurrency and digital payment system intended to be a blockchain-based
                  cooperative digital storage and data retrieval method.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Arweave"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Arweave</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A blockchain-like structure called the "blockweave" that enables permanent data storage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="Storj" width={80} height={80} className="mb-2" />
                <CardTitle>Storj</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An open-source, decentralized file storage service that uses encryption, file sharding, and a
                  blockchain-based hash table.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authentication & Security */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Key className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">
                Authentication & Security
              </h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Industry-standard authentication protocols enhanced with blockchain security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="OAuth 2.0"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>OAuth 2.0</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An industry-standard protocol for authorization that provides specific authorization flows for web
                  applications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="OpenID Connect"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>OpenID Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  An identity layer on top of the OAuth 2.0 protocol that allows clients to verify the identity of the
                  end-user.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Web3 Wallets"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Web3 Wallets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Cryptocurrency wallets that allow users to interact with decentralized applications and manage their
                  digital identities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">Cloud Platforms</h2>
            </div>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Enterprise-grade infrastructure to ensure reliability, scalability, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="AWS" width={80} height={80} className="mb-2" />
                <CardTitle>AWS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Amazon Web Services, a comprehensive cloud computing platform.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="Azure" width={80} height={80} className="mb-2" />
                <CardTitle>Azure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Microsoft's cloud computing service for building, testing, deploying, and managing applications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Google Cloud"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Google Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Google's suite of cloud computing services that runs on the same infrastructure as Google.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="Infura" width={80} height={80} className="mb-2" />
                <CardTitle>Infura</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A suite of high-availability APIs and developer tools that provide quick, reliable access to the
                  Ethereum and IPFS networks.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Alchemy"
                  width={80}
                  height={80}
                  className="mb-2"
                />
                <CardTitle>Alchemy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  A blockchain developer platform that provides the infrastructure and tools needed to build reliable
                  decentralized applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

