// ── SINGLE SOURCE OF TRUTH ──
// Edit this file to update both the full site and the simple site.

const HERO = {
  name:       'Eric Guzman',
  role:       'Security Engineer & Analyst',
  location:   'Garden City, NY',
  university: 'Marist University',
  degree:     "Cybersecurity B.S. '25",
  bio:        'CompTIA Security+ certified cybersecurity graduate (Marist University, B.S. 2025) with hands-on experience building and operating a full SOC detection stack — Splunk, Wazuh, and Suricata — on real hardware against live attack traffic. I have documented ransomware simulations, Active Directory attack chains, container escapes, and network-wide DNS filtering from the ground up. I am looking for a Tier 1 SOC analyst or security engineering role where I can bring that lab experience into production.',
  links: [
    { label: 'e.ricgzmn7@gmail.com', href: 'mailto:e.ricgzmn7@gmail.com' },
    { label: 'GitHub',               href: 'https://github.com/ericguz1' },
    { label: 'LinkedIn',             href: 'http://www.linkedin.com/in/eric-guzman-99722a351' },
    { label: '(516) 497-0204',       href: 'tel:5164970204' },
  ]
};

// ── CERTIFICATIONS ──
// To add a cert: copy a block below, fill in the fields.
// Set pending:true for in-progress certs (no actions needed).
const CERTS = [
  {
    badge:   'CompTIA · Active · DoD 8140 Compliant · Issued Feb 2026',
    title:   'CompTIA Security+ (SY0-701)',
    desc:    'Globally recognized vendor-neutral IT security certification. Covers threat management, cryptography, identity management, security systems, and network infrastructure.',
    actions: [
      { label: 'View PDF',     href: 'assets/pdfs/Eric Guzman CompTIA Security+ ce certificate.pdf' },
      { label: 'Verify Badge', href: 'https://www.credly.com/badges/38a7009d-158f-48d7-b24c-dc30509af2f3' },
    ]
  },
  {
    badge:   'CRTOM · Active · Issued Dec 2025',
    title:   'Certified Red Team Operations Management (CRTOM)',
    desc:    'Certification in leading red team programs including threat-led testing (TLPT/TIBER), rules of engagement, deconfliction, and measuring effectiveness through KPIs and risk alignment.',
    actions: [
      { label: 'View PDF', href: 'assets/pdfs/EricGuzmanCRTOMCert.pdf' },
    ]
  },
  {
    badge:   'Microsoft · In Progress · Expected Mar 2026',
    title:   'Microsoft Azure Fundamentals (AZ-900)',
    desc:    'Foundational certification covering core Azure cloud concepts, services, security, privacy, compliance, and pricing. Entry point for Microsoft cloud credentials.',
    pending: true
  },
  {
    badge:   'Splunk · In Progress · Expected Mar 2026',
    title:   'Splunk Core Certified User',
    desc:    'Validates ability to search, use fields, create alerts, use lookups, and create basic statistical reports and dashboards in Splunk Enterprise and Splunk Cloud.',
    pending: true
  },
  {
    badge:   'Cisco · In Progress · Expected May 2026',
    title:   'Cisco Certified Network Associate (CCNA)',
    desc:    'Industry-standard networking certification covering IP connectivity, security fundamentals, automation, and programmability across enterprise network environments.',
    pending: true
  },
];

// ── SKILLS (summary grid — 4 cards on main site) ──
const SKILLS_GRID = [
  {
    name: 'SIEM &amp; Monitoring',
    body: '<b>Splunk Enterprise</b> · <b>Wazuh</b> · <b>Suricata</b><br>Sysmon · Windows Event Log · Log Ingestion · Alerting · Dashboarding · Anomaly Detection'
  },
  {
    name: 'Incident Response &amp; Forensics',
    body: '<b>Volatility</b> · <b>Autopsy</b> · <b>Wireshark</b> · FTK Imager<br>IOC Analysis · Alert Triage · Tier 1 IR · Phishing Analysis · IR Reporting'
  },
  {
    name: 'Threat Detection &amp; Pentest',
    body: '<b>Nessus</b> · <b>Metasploit</b> · <b>Nmap</b> · Burp Suite<br>Suricata IDS Rules · Malware Analysis · OSINT · False Positive Analysis'
  },
  {
    name: 'Networking &amp; Infrastructure',
    body: '<b>Cisco IOS</b> · ACLs · NAT · VLANs · DNS<br>SPAN Ports · Promiscuous Mode · Firewalls · Netplan · Docker · Kubernetes'
  },
];

// ── SKILLS (full inventory — expandable on main site, flat list on simple site) ──
const SKILLS_FULL = [
  { heading: 'SIEM & Monitoring',             text: 'Splunk Enterprise, Wazuh, Suricata, Sysmon, Windows Event Log Analysis, Log Ingestion, Alerting, Dashboarding, Anomaly Detection, Splunk Universal Forwarder, HEC' },
  { heading: 'Incident Response & Forensics', text: 'Volatility, Autopsy, FTK Imager, Wireshark, Threat Intelligence, IOC Analysis, IR Reporting, Alert Triage, Tier 1 IR Support, Phishing Analysis, SOP Development' },
  { heading: 'Threat Detection & Analysis',   text: 'Nessus, Nmap, Metasploit, Burp Suite, Suricata IDS Rules, Malware Analysis, Phishing Analysis, OSINT, Reconnaissance, False Positive Analysis, OpenVAS, Nikto, sqlmap' },
  { heading: 'Scripting & Automation',        text: 'Python (log parsing, automation, exploit dev), PowerShell, Bash/Batch, Log Parsing, Automation Scripting, SOP Development' },
  { heading: 'Networking & Infrastructure',   text: 'Cisco IOS, Static Routing, ACLs, NAT, DNS, Firewalls, VLANs, SPAN Ports, Promiscuous Mode, Netplan, Cisco Packet Tracer, DMZ design, Port Security, Palo Alto Firewall' },
  { heading: 'Platforms & Virtualization',    text: 'Kali Linux, AlmaLinux, Ubuntu Server/Desktop, Windows 10/11/Server, VMware Workstation Pro, Docker, Kubernetes (Minikube/kubectl), DVWA, Metasploitable 2, TryHackMe, HackTheBox' },
  { heading: 'Offensive Security',            text: 'Bash Bunny payloads, Flipper Zero, Defender Evasion, Persistence, Credential Dumping, Social Engineering, Active Directory Attacks, Kerberoasting, DCSync, BloodHound, Golden/Silver Tickets' },
];

// ── PROJECTS ──
// To add a project: add an entry to the relevant category array.
// tech colors: green, cyan, amber, purple, red, blue
const PROJECTS = {
  featured: [
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['green','Bash'],['amber','PowerShell']], name:'ransomware-sim',      title:'Windows Ransomware Simulation Capstone',              stack:'Bash Bunny · PowerShell · VMware',                          desc:'Fully reversible ransomware with encryption, Defender bypass, persistence, ransom note delivery, and decryption routine. End-to-end simulation in an isolated environment.',                                                                                                                                       pdf:'assets/pdfs/RansomwareSimulationCapstone-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['green','Bash'],['cyan','Docker']],      name:'homelab-red-blue',     title:'Advanced Red/Blue Team Homelab',                      stack:'VMware · Kali · Nessus · Metasploitable 2',                 desc:'Isolated multi-VM lab running authenticated Nessus scans and full kill chain attacks against intentionally vulnerable targets.',                                                                                                                                                                                    pdf:'assets/pdfs/HomelabAttackAndDefense-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'soc',      tech:[['green','AlmaLinux'],['cyan','Splunk'],['amber','Python']], name:'soc-homelab-siem', title:'SOC Analyst Homelab: Suricata, Wazuh & Splunk', stack:'AlmaLinux 10.1 · Suricata · Wazuh · Splunk Enterprise', desc:'Full-stack detection environment on a single host. Captured and analyzed 13,618 events including Priority 1 recon detection, live threat intel feed matches, and confirmed SSH brute force via Wazuh rule correlation engine.', pdf:'assets/pdfs/SOCAnalystHomelabEG.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['blue','AD'],['purple','Forensics']],    name:'ad-ir-lab',            title:'Active Directory & Incident Response Lab',            stack:'Windows Server · BloodHound · Volatility · Autopsy',       desc:'Simulated AD attack chain covering social engineering, credential dumping, and lateral movement. Full Tier 1 IR report with IOC identification, triage, and SOP-driven recovery. Memory and disk forensics performed with Volatility and Autopsy.',                                                                  pdf:'assets/pdfs/VirtualDomainController-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'infra',    tech:[['cyan','K8s'],['purple','seccomp']],     name:'kubernetes-security',  title:'Kubernetes Cluster Implementation & Security',        stack:'Minikube · kubectl · seccomp · AppArmor',                   desc:'Local Kubernetes cluster deployment with hardened container runtime profiles and documented breakout demonstrations.',                                                                                                                                                                                             pdf:'assets/pdfs/KubernetesClusterImplementation-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'infra',    tech:[['cyan','Docker'],['purple','seccomp']],  name:'docker-hardening',     title:'Docker Container Deployment & Hardening',             stack:'Docker · Podman · seccomp',                                 desc:'Containerized web apps and MySQL with custom security profiles. Breakout techniques documented against misconfigured profiles.',                                                                                                                                                                                   pdf:'assets/pdfs/DockerDeployment-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['amber','DNS'],['green','Bash']],        name:'pihole-dns',           title:'Network-Wide PiHole + Unbound DNS Server',            stack:'Ubuntu 24.04 · PiHole · Netplan · Router-level DNS',        desc:'24/7 ad, tracker, and malware blocking with recursive resolver and live dashboard. Enforced at the router level across the full network.',                                                                                                                                                                           pdf:'assets/pdfs/PiHoleProject.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['blue','Cisco'],['amber','Packet Tracer']], name:'enterprise-network', title:'Enterprise Network Security Challenge',              stack:'Cisco Packet Tracer · 20+ devices · ACLs · NAT · DMZ',     desc:'Multi-site corporate network with static routing, ACLs, NAT, port security, and DMZ design.',                                                                                                                                                                                                                    pdf:'assets/pdfs/InternetSecurityChallenge-Lab.pdf' },
  ],
  offensive: [
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['green','Bash'],['amber','PowerShell']], name:'ransomware-sim',       title:'Windows Ransomware Simulation Capstone',              stack:'Bash Bunny · PowerShell · VMware',                          desc:'Fully reversible ransomware with encryption, Defender bypass, persistence, ransom note delivery, and decryption routine.',                                                                                                                                                                                         pdf:'assets/pdfs/RansomwareSimulationCapstone-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['blue','AD'],['purple','Forensics']],    name:'ad-ir-lab',            title:'Active Directory & Incident Response Lab',            stack:'Windows Server · BloodHound · Volatility · Autopsy',       desc:'Simulated AD attack chain: social engineering, credential dumping, and lateral movement documented end-to-end with Tier 1 IR report.',                                                                                                                                                                            pdf:'assets/pdfs/VirtualDomainController-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['red','Metasploit'],['green','Bash']],   name:'exploit-workstation',  title:'Exploiting a Vulnerable Workstation',                 stack:'Metasploit · Nmap · Kali Linux',                            desc:'Full exploitation chain against a Windows target, from initial recon through post-exploitation.',                                                                                                                                                                                                                 pdf:'assets/pdfs/ExploitingAVulnerableWorkstation-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['amber','OSINT']],                       name:'osint-recon',          title:'OSINT and Reconnaissance Lab',                        stack:'Maltego · Shodan · Recon-ng',                               desc:'Full reconnaissance phase against a defined target using passive and active OSINT methods.',                                                                                                                                                                                                                       pdf:'assets/pdfs/OSINTandRconnaissance-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['amber','OSINT']],                       name:'corporate-osint',      title:'Corporate OSINT Research Report',                     stack:'Open Source Intelligence',                                  desc:'Open source intelligence gathering on a target organization, documenting exposure and risk surface.',                                                                                                                                                                                                            pdf:'assets/pdfs/CorporateOSINT-ResearchReport.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['amber','OSINT']],                       name:'web-footprint',        title:'Website Footprinting Lab',                            stack:'Passive + Active Enumeration',                              desc:'Passive and active information gathering on web targets including DNS, WHOIS, headers, and fingerprinting.',                                                                                                                                                                                                     pdf:'assets/pdfs/WebsiteFootprinting-Lab.pdf' },
  ],
  homelab: [
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'soc',      tech:[['green','AlmaLinux'],['cyan','Splunk']], name:'soc-homelab-siem',     title:'SOC Analyst Homelab: Suricata, Wazuh & Splunk',       stack:'AlmaLinux · Suricata · Wazuh · Splunk',                    desc:'Full-stack detection environment. 13,618 events analyzed, Priority 1 recon detection confirmed, live SSH brute force detected via Wazuh rule correlation.',                                                                                                                                                      pdf:'assets/pdfs/SOCAnalystHomelabEG.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['blue','AD'],['purple','Forensics']],    name:'ad-ir-lab',            title:'Active Directory & Incident Response Lab',            stack:'Windows Server · BloodHound · Volatility · Autopsy',       desc:'Simulated AD attack chain: social engineering, credential dumping, lateral movement. Full Tier 1 IR report with IOC identification, triage, and SOP-driven recovery using Volatility and Autopsy.',                                                                                                                 pdf:'assets/pdfs/VirtualDomainController-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['green','Bash'],['cyan','Docker']],      name:'homelab-red-blue',     title:'Advanced Red/Blue Team Homelab',                      stack:'VMware · Kali · Nessus · Metasploitable 2',                 desc:'Isolated multi-VM lab running authenticated Nessus scans and full kill chain attacks.',                                                                                                                                                                                                                          pdf:'assets/pdfs/HomelabAttackAndDefense-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['amber','DNS'],['green','Bash']],        name:'pihole-dns',           title:'Network-Wide PiHole + Unbound DNS Server',            stack:'Ubuntu 24.04 · PiHole · Netplan',                          desc:'Router-level DNS filtering with recursive resolver and live dashboard.',                                                                                                                                                                                                                                         pdf:'assets/pdfs/PiHoleProject.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'security', tech:[['blue','AD'],['amber','PowerShell']],    name:'virtual-dc',           title:'Virtual Domain Controller Lab',                       stack:'Windows Server · Active Directory',                         desc:'Building and attacking a Windows Active Directory environment, including Kerberoasting and DCSync.',                                                                                                                                                                                                            pdf:'assets/pdfs/VirtualDomainController-Lab.pdf' },
  ],
  infra: [
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'infra',    tech:[['cyan','K8s'],['purple','seccomp']],     name:'kubernetes-security',  title:'Kubernetes Cluster Implementation & Security',        stack:'Minikube · kubectl · seccomp · AppArmor',                  desc:'Hardened container runtime profiles and breakout demonstrations.',                                                                                                                                                                                                                                              pdf:'assets/pdfs/KubernetesClusterImplementation-Project.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'infra',    tech:[['cyan','Docker'],['purple','seccomp']],  name:'docker-hardening',     title:'Docker Container Deployment & Hardening',             stack:'Docker · Podman · seccomp',                                desc:'Custom security profiles and breakout techniques against misconfigured containers.',                                                                                                                                                                                                                            pdf:'assets/pdfs/DockerDeployment-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['blue','Cisco']],                        name:'enterprise-network',   title:'Enterprise Network Security Challenge',               stack:'Cisco Packet Tracer · 20+ devices',                        desc:'Multi-site network with ACLs, NAT, port security, and DMZ design.',                                                                                                                                                                                                                                            pdf:'assets/pdfs/InternetSecurityChallenge-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['blue','Cisco']],                        name:'ospf-migration',        title:'OSPF Dynamic Routing Migration',                     stack:'Cisco IOS · OSPF',                                         desc:'Migrating from static routing to OSPF in a production-like environment.',                                                                                                                                                                                                                                       pdf:'assets/pdfs/OSPFDynamicRoutingMigration-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['blue','Cisco']],                        name:'site-vpn',              title:'Site-to-Site VPN Configuration',                    stack:'Cisco IOS · IPsec',                                        desc:'IPsec VPN tunnel between two Cisco routers.',                                                                                                                                                                                                                                                                  pdf:'assets/pdfs/SiteToSiteVPNConfig-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'network',  tech:[['blue','Cisco']],                        name:'sdwan-faucet',          title:'Faucet SDN Controller Configuration',               stack:'Ryu · Faucet · OpenFlow',                                  desc:'Software-defined networking with Ryu/Faucet controller.',                                                                                                                                                                                                                                                      pdf:'assets/pdfs/FaucetSDNControllerConfig-Lab.pdf' },
  ],
  labs: [
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'acl-config',       title:'ACL Configuration Lab',                          stack:'Cisco IOS',                          desc:'Standard and extended ACL implementation on Cisco routers.',                         pdf:'assets/pdfs/ACLConfig-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'acl-zpf',          title:'ACLs and Zone-Based Policy Firewall',            stack:'Cisco ZPF',                          desc:'ZPF configuration, zone assignment, and policy testing.',                             pdf:'assets/pdfs/ACLsAndZPF-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['amber','Analysis']],      name:'active-disc',      title:'Active Discovery & Malware Analysis',            stack:'Nmap · Wireshark · Behavioral Analysis', desc:'Network discovery tools and behavioral malware analysis.',                        pdf:'assets/pdfs/ActiveDiscoveryAndMalwareAnalysis-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['purple','Crypto']],       name:'crypto-lab',       title:'Applying Encryption and Hashing Algorithms',     stack:'OpenSSL · Python',                   desc:'Symmetric/asymmetric encryption and hashing in practice.',                            pdf:'assets/pdfs/ApplyingEncryptionAndHashingAlgorithms-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['amber','OSINT']],         name:'corp-osint',       title:'Corporate OSINT Research Report',                stack:'Open Source Intelligence',           desc:'Open source intelligence gathering on a target organization.',                        pdf:'assets/pdfs/CorporateOSINT-ResearchReport.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['red','Exploit']],         name:'exploit-ws',       title:'Exploiting a Vulnerable Workstation',            stack:'Metasploit · Kali',                  desc:'Full exploitation chain against a Windows target.',                                   pdf:'assets/pdfs/ExploitingAVulnerableWorkstation-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['blue','IR']],             name:'ir-report',        title:'Incident Response Report',                       stack:'DFIR · NIST Framework',              desc:'Full IR workflow from detection through recovery.',                                    pdf:'assets/pdfs/IncidentResponseReportExample.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'internetwork',     title:'Internetworking Challenge Lab',                  stack:'Cisco IOS · Routing Protocols',      desc:'Complex multi-router topology with routing protocols.',                               pdf:'assets/pdfs/InternetworkingChallenge-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'intervlan',        title:'Inter-VLAN Routing (Router-on-a-Stick)',         stack:'Cisco IOS · VLANs',                  desc:'VLAN configuration and inter-VLAN routing.',                                          pdf:'assets/pdfs/InterVLANRoutingRouterOnAStick-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'net-dev-sec',      title:'Network Device Security and Services',           stack:'Cisco IOS',                          desc:'Hardening Cisco devices and enabling secure services.',                               pdf:'assets/pdfs/NetworkDeviceSecurityAndServicesLab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['amber','Research']],      name:'net-disc',         title:'Network Discovery Tools & Techniques',           stack:'Nmap · Passive Recon',               desc:'Research paper on active and passive discovery methods.',                             pdf:'assets/pdfs/NetworkDiscoveryTools+Techniques-ResearchPaper.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['green','Wireshark']],     name:'traffic-analysis', title:'Network Traffic Analysis Lab',                  stack:'Wireshark · Packet Capture',         desc:'Wireshark deep dive into real traffic captures.',                                     pdf:'assets/pdfs/NetworkTrafficAndAnalysis-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['amber','OSINT']],         name:'osint-lab',        title:'OSINT and Reconnaissance Lab',                  stack:'Recon-ng · Shodan',                  desc:'Full reconnaissance phase against a defined target.',                                 pdf:'assets/pdfs/OSINTandRconnaissance-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'ospf',             title:'OSPF Dynamic Routing Migration',                stack:'Cisco IOS · OSPF',                   desc:'Migrating from static to OSPF routing.',                                              pdf:'assets/pdfs/OSPFDynamicRoutingMigration-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['green','Wireshark']],     name:'proto-analysis',   title:'Protocol Traffic Analysis',                     stack:'Wireshark · HTTP · DNS · SMB',       desc:'Detailed analysis of common protocols.',                                              pdf:'assets/pdfs/ProtocolTrafficAnalysis-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'vpn-site',         title:'Site-to-Site VPN Configuration',                stack:'Cisco IOS · IPsec',                  desc:'IPsec VPN between two Cisco routers.',                                                pdf:'assets/pdfs/SiteToSiteVPNConfig-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'static-route',     title:'Static Routing Lab',                            stack:'Cisco IOS',                          desc:'Multi-area static routing with redundancy.',                                          pdf:'assets/pdfs/StaticRouting-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['blue','AD'],['amber','PowerShell']], name:'virt-dc', title:'Virtual Domain Controller Lab',               stack:'Windows Server · AD',                desc:'Building and attacking a Windows Active Directory environment.',                       pdf:'assets/pdfs/VirtualDomainController-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','Cisco']],          name:'vlans',            title:'VLANs and Port Security',                       stack:'Cisco IOS · VLANs',                  desc:'VLAN design and switch port security.',                                               pdf:'assets/pdfs/VLANsAndPorts-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['red','Vuln']],            name:'wan-vuln',         title:'WAN Vulnerability Assessment & Hardening',      stack:'Nessus · Cisco IOS',                 desc:'Scanning and securing a simulated WAN environment.',                                  pdf:'assets/pdfs/WANVulnerabilityAssesmentAndHardening-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'sec',  tech:[['amber','OSINT']],         name:'web-footprint',    title:'Website Footprinting Lab',                      stack:'Passive + Active Enumeration',       desc:'Passive and active information gathering on web targets.',                            pdf:'assets/pdfs/WebsiteFootprinting-Lab.pdf' },
    { perms:'lrwxrwxrwx', user:'ericguz', grp:'net',  tech:[['blue','SDN']],            name:'faucet',           title:'Faucet SDN Controller Configuration',           stack:'Ryu · Faucet',                       desc:'Software-defined networking with Faucet controller.',                                 pdf:'assets/pdfs/FaucetSDNControllerConfig-Lab.pdf' },
  ]
};
