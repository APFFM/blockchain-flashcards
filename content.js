const courseContent = {
  topics: [
    {
      name: "Introduction and Perspective",
      cards: [
        {
          question: "What is Blockchain?",
          answer: "A distributed, immutable ledger that records and verifies transactions securely and transparently",
          detail: "A blockchain allows multiple parties to share a database and modify it safely, even if they don't trust each other. Key characteristics include decentralization, transparency, immutability, and security through cryptography."
        },
        {
          question: "Key Terms in Blockchain",
          answer: "DLT, Cryptocurrency, Bitcoin, Ethereum, Web3",
          detail: "DLT: Distributed Ledger Technology - broader term for shared databases\nCryptocurrency: Digital currencies using cryptography\nBitcoin: First decentralized cryptocurrency\nEthereum: Smart contract platform\nWeb3: Decentralized internet vision"
        },
        {
          question: "Main Blockchain Use Cases",
          answer: "Finance, Supply Chain, Healthcare, Voting",
          detail: "Finance: DeFi, stablecoins, asset tokenization\nSupply Chain: Product tracking and authenticity\nHealthcare: Secure medical records\nVoting: Transparent and secure elections"
        }
      ]
    },
    {
      name: "Money and Trust",
      cards: [
        {
          question: "What are the three primary functions of money?",
          answer: "Medium of Exchange, Store of Value, Unit of Account",
          detail: "Medium of Exchange: Facilitates transactions by overcoming double coincidence of wants\nStore of Value: Allows value to be stored over time\nUnit of Account: Provides common measure of value"
        },
        {
          question: "How does the Trust Game demonstrate transaction dynamics?",
          answer: "Shows how trust enables beneficial outcomes while lack of trust limits opportunities",
          detail: "The Trust Game is an interactive simulation showing:\n- Trust leads to mutual benefits\n- Lack of trust results in missed opportunities\n- Trust is fundamental to economic transactions"
        },
        {
          question: "How does Bitcoin relate to traditional money functions?",
          answer: "Bitcoin partially fulfills money functions but lacks full state backing",
          detail: "Bitcoin challenges:\n- Limited acceptance as medium of exchange\n- Volatile store of value\n- Variable unit of account\nNot widely accepted as traditional money"
        }
      ]
    },
    {
      name: "Cryptography and Keys",
      cards: [
        {
          question: "What are the two main types of encryption?",
          answer: "Symmetric-key and Public-key (Asymmetric) Encryption",
          detail: "Symmetric-key: Same key for encryption/decryption\nPublic-key: Separate keys for encryption (public) and decryption (private)\nKerckhoff's principle: System security relies on key secrecy, not algorithm"
        },
        {
          question: "What is the difference between hosted and unhosted wallets?",
          answer: "Control over private keys - hosted by third party vs controlled by user",
          detail: "Hosted Wallets:\n- Third party controls keys\n- More user-friendly\n- Higher custodial risk\n\nUnhosted Wallets:\n- User controls keys\n- More technical responsibility\n- No custodial risk"
        },
        {
          question: "What is crypto custody and why is it important?",
          answer: "Secure storage and management of private keys, often requiring licenses",
          detail: "Custody involves:\n- High security standards\n- IT security measures\n- Regulatory compliance\n- Professional key management\nCritical for institutional adoption"
        }
      ]
    },
    {
      name: "Bitcoin Transactions",
      cards: [
        {
          question: "What are the five fundamental Bitcoin rules?",
          answer: "No negative balances, Immutability, Transparency, Proof-of-Work, 8 decimal places",
          detail: "1. No negative balances: Can only spend owned coins\n2. Immutability: Transactions cannot be changed\n3. Transparency: All transactions are public\n4. PoW: Consensus mechanism\n5. Decimals: Smallest unit is 0.00000001 BTC (Satoshi)"
        },
        {
          question: "How does the transaction pool work?",
          answer: "Temporary storage for pending transactions before block inclusion",
          detail: "Transaction Pool:\n- Each node maintains its own pool\n- Transactions propagate to peer nodes\n- Miners select transactions for blocks\n- Confirmed transactions are removed"
        },
        {
          question: "What is the role of nodes in the Bitcoin network?",
          answer: "Store and validate transactions, maintain network consensus",
          detail: "Nodes:\n- Store full/partial ledger copy\n- Validate transactions\n- Propagate transactions\n- Maintain decentralization\nMiners are specialized nodes that also create blocks"
        }
      ]
    },
    {
      name: "Mining and Blocks",
      cards: [
        {
          question: "What is the structure of a Bitcoin block?",
          answer: "Header (with previous block link) and transaction data",
          detail: "Block Components:\n- Header: Contains metadata and previous block hash\n- Transaction data: Records of all included transactions\n- Added every ~10 minutes\n- Genesis block is the first block"
        },
        {
          question: "How does the block reward system work?",
          answer: "Miners receive rewards that halve every 210,000 blocks",
          detail: "Block Reward History:\n- Started at 50 BTC\n- Current reward: 3.125 BTC (2024)\n- Halves every ~4 years\n- Plus transaction fees\nTotal supply capped at 21 million BTC"
        },
        {
          question: "What determines transaction costs?",
          answer: "Network activity and transaction size",
          detail: "Fee Factors:\n- Network congestion\n- Transaction data size\n- Priority level\n- Market competition among miners\nUsers can choose higher fees for faster confirmation"
        }
      ]
    },
    {
      name: "Consensus Mechanisms",
      cards: [
        {
          question: "What are the main types of consensus mechanisms?",
          answer: "PoW, PoS, DPoS, DAG, PoA",
          detail: "Proof of Work (PoW): Computational puzzles\nProof of Stake (PoS): Token-based validation\nDelegated PoS: Voted validators\nDirected Acyclic Graph: Transaction verification\nProof of Authority: Authorized validators"
        },
        {
          question: "How does Proof of Work function?",
          answer: "Miners compete to solve cryptographic puzzles for block rewards",
          detail: "PoW Process:\n- Miners use computing power\n- First to solve adds block\n- Requires significant energy\n- Provides network security\nUsed by Bitcoin and others"
        },
        {
          question: "What are the advantages of Proof of Stake?",
          answer: "Energy efficient, lower hardware requirements, economic security",
          detail: "PoS Benefits:\n- 99.95% less energy than PoW\n- Validators stake tokens\n- Punishment for bad behavior\n- No specialized hardware needed\nUsed by Ethereum post-merge"
        }
      ]
    },
    {
      name: "Cryptographic Hashing",
      cards: [
        {
          question: "What are the three key properties of cryptographic hash functions?",
          answer: "Collision-Free, Hiding, Puzzle-Friendly",
          detail: "1. Collision-Free: Computationally infeasible to find different inputs with same hash\n2. Hiding: Cannot determine input from hash output\n3. Puzzle-Friendly: No better strategy than random guessing for finding specific hash"
        },
        {
          question: "What is a hash pointer and its use in blockchain?",
          answer: "Data structure containing data hash and location pointer",
          detail: "Hash Pointer Functions:\n- Links blocks together\n- Ensures data integrity\n- Creates tamper-evident chain\n- Enables verification of history\nFundamental to blockchain structure"
        },
        {
          question: "How does a Merkle Tree work?",
          answer: "Binary tree of hashes for efficient transaction verification",
          detail: "Merkle Tree Structure:\n- Leaf nodes: Transaction hashes\n- Parent nodes: Hash of children\n- Root: Single hash representing all transactions\n- Enables SPV wallets\nEfficient for large datasets"
        }
      ]
    },
    {
      name: "Smart Contracts & Ethereum",
      cards: [
        {
          question: "What is a smart contract?",
          answer: "Self-executing code that automates agreement terms",
          detail: "Key Features:\n- Automated execution\n- Trustless operation\n- Immutable once deployed\n- Transparent rules\nFirst defined by Nick Szabo in 1994"
        },
        {
          question: "What is the Ethereum Virtual Machine (EVM)?",
          answer: "Virtual machine that executes smart contracts on Ethereum",
          detail: "EVM Characteristics:\n- Runs on all Ethereum nodes\n- Ensures consistent execution\n- Turing complete\n- Executes bytecode\nEnables decentralized applications"
        },
        {
          question: "What are the main Ethereum token standards?",
          answer: "ERC-20, ERC-721, ERC-1155, ERC-1400",
          detail: "ERC-20: Fungible tokens (e.g., DAI)\nERC-721: Non-fungible tokens (NFTs)\nERC-1155: Multi-token standard\nERC-1400: Security tokens\nEnables standardized token interfaces"
        }
      ]
    },
    {
      name: "Decentralized Finance (DeFi)",
      cards: [
        {
          question: "What are the key characteristics of DeFi?",
          answer: "Open, Transparent, Composable, Non-Custodial",
          detail: "Open: Accessible to anyone\nTransparent: Code and transactions visible\nComposable: Protocols can be combined\nNon-Custodial: Users control funds\nBuilt primarily on Ethereum"
        },
        {
          question: "What are the main DeFi use cases?",
          answer: "DEXs, Lending, Stablecoins, Derivatives, Insurance, Asset Management",
          detail: "DEXs: Decentralized exchanges\nLending: Collateralized loans\nStablecoins: Price-stable assets\nDerivatives: Synthetic assets\nInsurance: Risk protection\nAsset Management: Portfolio automation"
        },
        {
          question: "What are the primary DeFi risks?",
          answer: "Smart Contract, Governance, Centralization, Regulatory risks",
          detail: "Smart Contract: Code vulnerabilities\nGovernance: Protocol control risks\nCentralization: Dependencies on key components\nRegulatory: Uncertain legal status\nExample: TheDAO hack impact"
        }
      ]
    },
    {
      name: "Tokenization & Assets",
      cards: [
        {
          question: "What are the benefits of tokenization?",
          answer: "Increased Liquidity, Faster Settlement, Lower Costs, Enhanced Risk Management",
          detail: "Liquidity: 24/7 trading markets\nSettlement: Near-instant clearing\nCosts: Reduced intermediaries\nRisk: Improved transparency\nFractional ownership possible"
        },
        {
          question: "What assets can be tokenized?",
          answer: "Real Estate, Art, IP, Securities, Commodities, Currencies",
          detail: "Real Estate: Property fractionalization\nArt: Digital and physical art\nIP: Patent and copyright tokens\nSecurities: Stock and bond tokens\nCommodities: Gold and resource tokens"
        },
        {
          question: "How do atomic swaps work?",
          answer: "Trustless exchange of different cryptocurrencies using hash-locked contracts",
          detail: "Process:\n- Hash timelock contracts\n- Cross-chain transactions\n- No intermediary needed\n- Simultaneous settlement\nEnables decentralized exchange"
        }
      ]
    },
    {
      name: "Central Bank Digital Currencies",
      cards: [
        {
          question: "What are the two main types of CBDCs?",
          answer: "Wholesale CBDCs and Retail CBDCs",
          detail: "Wholesale CBDCs:\n- For interbank settlements\n- Limited to financial institutions\n\nRetail CBDCs:\n- For general public use\n- Direct central bank access\nDifferent design considerations for each"
        },
        {
          question: "What are the key CBDC design considerations?",
          answer: "Access, Remuneration, Ownership, Distribution, Technology",
          detail: "Access: Wholesale vs retail\nRemuneration: Interest-bearing or not\nOwnership: Account vs token-based\nDistribution: One-tier vs two-tier\nTechnology: DLT vs conventional database"
        },
        {
          question: "What are the main benefits and risks of CBDCs?",
          answer: "Benefits: Financial inclusion, payment efficiency, monetary policy\nRisks: Financial stability, privacy, cybersecurity",
          detail: "Benefits:\n- Improved financial inclusion\n- Enhanced payment systems\n- Better monetary control\n\nRisks:\n- Digital bank runs\n- Privacy concerns\n- Security vulnerabilities"
        },
        {
          question: "What are notable CBDC projects globally?",
          answer: "China's Digital Yuan, EU's Digital Euro, Sweden's e-Krona, Bahamas Sand Dollar",
          detail: "Digital Yuan: Two-tier with commercial banks\nDigital Euro: €3,000 holding limit\ne-Krona: Balance limits for anonymity\nSand Dollar: First nationwide CBDC"
        }
      ]
    },
    {
      name: "Regulation & Compliance",
      cards: [
        {
          question: "What are the key regulatory challenges in crypto?",
          answer: "Supervision scope, data access, innovation balance, regulatory arbitrage",
          detail: "Challenges:\n- Determining who to regulate\n- Accessing reliable data\n- Balancing innovation and safety\n- Preventing jurisdiction shopping\nEvolving regulatory landscape"
        },
        {
          question: "What is MiCA regulation?",
          answer: "EU's Markets in Crypto-assets comprehensive regulatory framework",
          detail: "MiCA Framework:\n- Asset classification\n- Stablecoin rules\n- Exchange licensing\n- Consumer protection\nFirst comprehensive crypto regulation"
        },
        {
          question: "What are the key AML requirements for crypto?",
          answer: "KYC, Transaction monitoring, Suspicious activity reporting",
          detail: "Requirements:\n- Customer identification\n- Transaction tracking\n- Risk assessment\n- Reporting suspicious activity\nFATF recommendations compliance"
        }
      ]
    },
    {
      name: "Non-Fungible Tokens (NFTs)",
      cards: [
        {
          question: "What are the key characteristics of NFTs?",
          answer: "Unique, Indivisible, Verifiable Ownership",
          detail: "Unique: Each NFT has distinct identifier\nIndivisible: Cannot be split into smaller units\nVerifiable: Blockchain proves authenticity\nMetadata: Contains additional information\nNon-interchangeable assets"
        },
        {
          question: "What are the main NFT use cases?",
          answer: "Digital Art, Gaming, Music, Collectibles, Identity",
          detail: "Digital Art: CryptoPunks, Beeple\nGaming: In-game items, virtual land\nMusic: Rights and royalties\nCollectibles: Trading cards, memorabilia\nIdentity: Credentials and certificates"
        },
        {
          question: "What are the major NFT marketplaces?",
          answer: "OpenSea, Rarible, SuperRare, Foundation, Nifty Gateway",
          detail: "OpenSea: Largest marketplace\nRarible: Community governed\nSuperRare: Curated digital art\nFoundation: Invite-only platform\nNifty Gateway: Luxury NFTs"
        }
      ]
    },
    {
      name: "Economic Theory & Blockchain",
      cards: [
        {
          question: "How does blockchain transform traditional transactions?",
          answer: "Reduces intermediaries, lowers costs, increases efficiency",
          detail: "Changes:\n- Direct peer-to-peer transactions\n- Automated settlement\n- Reduced counterparty risk\n- Transparent processes\nStreamlined value chains"
        },
        {
          question: "What are the key benefits of using blockchain?",
          answer: "Reduced Trust Requirements, Seamless Processing, Business Process Optimization",
          detail: "Trust: Cryptographic proof vs intermediaries\nProcessing: Straight-through processing\nOptimization: Cross-entity coordination\nCosts: Lower transaction fees\nTransparency: Enhanced accountability"
        },
        {
          question: "What is the Maersk use case?",
          answer: "Supply chain optimization using blockchain",
          detail: "Implementation:\n- Document digitization\n- Real-time tracking\n- Reduced paperwork\n- Faster shipping times\nSignificant cost reductions achieved"
        }
      ]
    },
    {
      name: "Security & Criminal Activities",
      cards: [
        {
          question: "How anonymous are Bitcoin transactions?",
          answer: "Pseudonymous rather than anonymous",
          detail: "Characteristics:\n- Public key pseudonymity\n- Traceable transactions\n- Chain analysis possible\n- Identity linkage risks\nNot truly anonymous"
        },
        {
          question: "What are mixers/tumblers?",
          answer: "Services that attempt to obscure transaction origins",
          detail: "Operation:\n- Mix multiple user funds\n- Break transaction trails\n- Privacy enhancement\nLimitations: Still traceable through analysis"
        },
        {
          question: "What are key AML/CFT requirements?",
          answer: "KYC checks, Transaction monitoring, Suspicious activity reporting",
          detail: "Compliance Requirements:\n- Customer verification\n- Transaction screening\n- Risk assessment\n- Regulatory reporting\nChainalysis tools usage"
        }
      ]
    },
    {
      name: "Blockchain Scaling Solutions",
      cards: [
        {
          question: "What is the difference between ZK-Rollups and Optimistic Rollups?",
          answer: "ZK-Rollups use validity proofs, Optimistic Rollups use fraud proofs",
          detail: "ZK-Rollups:\n- Instant finality\n- Privacy features\n- Complex computation\n\nOptimistic Rollups:\n- 7-day challenge period\n- EVM compatible\n- Simpler implementation\nTVL Comparison: zkSync vs Arbitrum"
        },
        {
          question: "How does sharding improve blockchain scalability?",
          answer: "Splits network into parallel chains for increased throughput",
          detail: "Sharding Features:\n- 64 shard chains planned\n- Cross-shard communication\n- Beacon chain coordination\n- 100k TPS target\nPart of Ethereum's scaling roadmap"
        },
        {
          question: "What are Plasma Chain variants?",
          answer: "MVP, Cash, Debit - different approaches to off-chain scaling",
          detail: "Types:\n- MVP: Minimal viable plasma\n- Cash: UTXO model\n- Debit: State transitions\nChallenges: Mass exit problem"
        }
      ]
    },
    {
      name: "Enterprise Blockchain",
      cards: [
        {
          question: "What are the key supply chain blockchain benefits?",
          answer: "Provenance tracking, real-time monitoring, automated compliance",
          detail: "Benefits:\n- Product authenticity verification\n- End-to-end visibility\n- Automated documentation\n- Reduced disputes\nExample: IBM Food Trust implementation"
        },
        {
          question: "How does blockchain benefit financial services?",
          answer: "Faster settlement, reduced costs, increased transparency",
          detail: "Improvements:\n- T+0 vs T+2 settlement\n- Eliminated intermediaries\n- Shared audit trail\n- Automated compliance\nExample: JPMorgan's Onyx platform"
        },
        {
          question: "What are the main enterprise blockchain platforms?",
          answer: "Hyperledger Fabric, R3 Corda, Quorum, MultiChain",
          detail: "Features:\n- Permissioned access\n- Privacy controls\n- High performance\n- Enterprise support\nSuitable for business networks"
        }
      ]
    },
    {
      name: "Advanced Technical Concepts",
      cards: [
        {
          question: "How do zero-knowledge proofs work?",
          answer: "Prove knowledge without revealing information",
          detail: "Components:\n- Prover and Verifier\n- Completeness\n- Soundness\n- Zero-knowledge property\nApplications in privacy and scaling"
        },
        {
          question: "What is the blockchain trilemma?",
          answer: "Trade-off between Decentralization, Security, and Scalability",
          detail: "Can only optimize two:\n- Bitcoin: Decentralization + Security\n- Solana: Scalability + Security\n- Sidechains: Scalability + Decentralization\nFundamental blockchain challenge"
        },
        {
          question: "How does cross-chain interoperability work?",
          answer: "Bridges, wrapped tokens, and atomic swaps enable cross-chain transactions",
          detail: "Methods:\n- Trusted bridges\n- Trustless protocols\n- Wrapped assets\n- Hash-time locked contracts\nRisks: Bridge security"
        }
      ]
    }
  ]
};

export default courseContent; 