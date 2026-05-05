// ── SINGLE SOURCE OF TRUTH ──
// Edit this file to update both the full site and the simple site.

const HERO = {
  name: 'Eric Guzman',
  role: 'Entry-level IT and Cybersecurity Professional ',
  location: 'Garden City, NY',
  university: 'Marist University',
  degree: "Cybersecurity B.S. '25",
  bio: 'Cybersecurity graduate (Marist University, B.S. 2025, GPA 3.5) and CompTIA Security+ certified with hands-on experience across security operations, network infrastructure, systems administration, and IT support. I have built and operated a full SOC detection stack on physical hardware against live attack traffic, designed multi-site enterprise networks, provisioned production-grade Linux server environments running 24/7, and documented everything from ransomware simulations to malware analysis and network-wide DNS filtering. I am actively pursuing my first IT role and open to wherever I can contribute, whether that is a help desk, a SOC, a network team, or a sysadmin environment. I bring strong written communication, a methodical approach to troubleshooting, and a habit of building systems and writing the documentation to support them.',
  links: [
    { label: 'e.ricgzmn7@gmail.com', href: 'mailto:e.ricgzmn7@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/ericguz1' },
    { label: 'LinkedIn', href: 'http://www.linkedin.com/in/eric-guzman-99722a351' },
    { label: '(516) 497-0204', href: 'tel:5164970204' },
  ]
};

// ── CERTIFICATIONS ──
// To add a cert: copy a block below, fill in the fields.
// Set pending:true for in-progress certs (no actions needed).
const CERTS = [
  {
    badge: 'CompTIA · Active · DoD 8140 Compliant · Issued Feb 2026',
    title: 'CompTIA Security+ (SY0-701)',
    desc: 'Globally recognized vendor-neutral IT security certification. Covers threat management, cryptography, identity management, security systems, and network infrastructure.',
    actions: [
      { label: 'View PDF', href: 'assets/pdfs/Eric Guzman CompTIA Security+ ce certificate.pdf' },
      { label: 'Verify Badge', href: 'https://www.credly.com/badges/38a7009d-158f-48d7-b24c-dc30509af2f3' },
    ]
  },
  {
    badge: 'Microsoft · Active · Issued Mar 2026',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    desc: 'Foundational certification covering core Azure cloud concepts, services, security, privacy, compliance, and pricing. Entry point for Microsoft cloud credentials.',
    actions: [
      { label: 'Verify Badge', href: 'https://learn.microsoft.com/api/credentials/share/en-us/egz-0428/ADFD285BF0D8ACE0?sharingId=C33C1D6C47F373C0' },
    ]
  },
  {
    badge: 'CRTOM · Active · Issued Dec 2025',
    title: 'Certified Red Team Operations Management (CRTOM)',
    desc: 'Certification in leading red team programs including threat-led testing (TLPT/TIBER), rules of engagement, deconfliction, and measuring effectiveness through KPIs and risk alignment.',
    actions: [
      { label: 'View PDF', href: 'assets/pdfs/EricGuzmanCRTOMCert.pdf' },
    ]
  },
  {
    badge: 'Cisco · In Progress · Expected May 2026',
    title: 'Cisco Certified Network Associate (CCNA)',
    desc: 'Industry-standard networking certification covering IP connectivity, security fundamentals, automation, and programmability across enterprise network environments.',
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
  { heading: 'SIEM & Monitoring', text: 'Splunk Enterprise, Wazuh, Suricata, Sysmon, Windows Event Log Analysis, Log Ingestion, Alerting, Dashboarding, Anomaly Detection, Splunk Universal Forwarder, HEC' },
  { heading: 'Incident Response & Forensics', text: 'Volatility, Autopsy, FTK Imager, Wireshark, Threat Intelligence, IOC Analysis, IR Reporting, Alert Triage, Tier 1 IR Support, Phishing Analysis, SOP Development' },
  { heading: 'Threat Detection & Analysis', text: 'Nessus, Nmap, Metasploit, Burp Suite, Suricata IDS Rules, Malware Analysis, Phishing Analysis, OSINT, Reconnaissance, False Positive Analysis, OpenVAS, Nikto, sqlmap' },
  { heading: 'Scripting & Automation', text: 'Python (log parsing, automation, exploit dev), PowerShell, Bash/Batch, Log Parsing, Automation Scripting, SOP Development' },
  { heading: 'Networking & Infrastructure', text: 'Cisco IOS, Static Routing, ACLs, NAT, DNS, Firewalls, VLANs, SPAN Ports, Promiscuous Mode, Netplan, Cisco Packet Tracer, DMZ design, Port Security, Palo Alto Firewall' },
  { heading: 'Platforms & Virtualization', text: 'Kali Linux, AlmaLinux, Ubuntu Server/Desktop, Windows 10/11/Server, VMware Workstation Pro, Docker, Kubernetes (Minikube/kubectl), DVWA, Metasploitable 2, TryHackMe, HackTheBox' },
  { heading: 'Offensive Security', text: 'Bash Bunny payloads, Flipper Zero, Defender Evasion, Persistence, Credential Dumping, Social Engineering, Active Directory Attacks, Kerberoasting, DCSync, BloodHound, Golden/Silver Tickets' },
];

// ── PROJECTS ──
// To add a project: add one entry to PROJECTS.all, then add its key to any category arrays below.
// listed: set to today's date when publishing — [NEW] badge auto-appears for 30 days, then disappears.
// tech colors: green, cyan, amber, purple, red, blue.
const PROJECTS = {

  // ── MASTER LOOKUP — all project data lives here exactly once ──
  all: {
    'soc-homelab-siem': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'soc', tech: [['green', 'AlmaLinux'], ['cyan', 'Splunk'], ['amber', 'Python']], title: 'SOC Analyst Homelab: Suricata, Wazuh & Splunk', stack: 'AlmaLinux 10.1 · Suricata · Wazuh · Splunk Enterprise', desc: 'Detected real inbound attack traffic in a home-built SOC environment as measured by 13,618 events analyzed, Wazuh rule 5712 firing 39 times against confirmed SSH brute force bot traffic, and live signature matches from ET CINS and Spamhaus threat intelligence feeds by deploying Suricata (built from source), Wazuh, and Splunk Enterprise on a single AlmaLinux 10.1 host with SPAN port mirroring, HEC ingestion, and custom SPL queries for severity triage and timeline reconstruction.', listed: '2026-03-28', pdf: 'assets/pdfs/SOCAnalystHomelabEG.pdf' },
    'helpdesk-lab': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'infra', tech: [['cyan', 'osTicket'], ['green', 'Ubuntu'], ['amber', 'ITSM']], title: 'IT Help Desk Lab: osTicket & SLA Enforcement', stack: 'osTicket 1.18.3 · nginx · PHP-FPM · MySQL 8.4 · Ubuntu 25.04', desc: 'Deployed and operated a production-realistic IT help desk environment processing 8 tickets across 4 departments and 5 workflow categories, with automatic SLA enforcement across SEV-1 (1hr/24x7), SEV-2 (4hr/24x7), and SEV-3 (8hr/business hours) tiers and zero manual triage required on standard ticket categories, by configuring osTicket 1.18.3 with 8 help topic routing rules, tiered escalation paths between Tier 1 and Tier 2 agents, and 5 written SOPs covering account lockouts, escalation handoff, critical incident response, hardware provisioning, and access management on an nginx, PHP-FPM, and MySQL 8.4 stack running on Ubuntu Server 25.04.', listed: '2026-03-28', pdf: 'assets/pdfs/HelpDeskLabEG.pdf' },
    'jamf-mdm-lab': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'infra', tech: [['cyan', 'Jamf'], ['green', 'iOS'], ['amber', 'MDM']], title: 'iOS MDM Lab: Jamf Now Device Enrollment & Policy Enforcement', stack: 'Jamf Now · APNs · iPhone 14 Pro · Open Enrollment · iOS 18.7.3', desc: 'Enrolled and managed a personal iPhone as a BYOD endpoint as measured by all Blueprint policies confirmed enforced at the OS level, a signed .mobileconfig profile verified to contain MDM, Password Policy, and SCEP Device Identity Certificate payloads, and passcode and auto-lock constraints confirmed with no user override available, by configuring an APNs certificate via Apple Push Certificates Portal, creating a Standard Employee Policy Blueprint with passcode, auto-lock, wipe threshold, and app restriction settings, and completing Open Enrollment via Safari on a live iPhone.', listed: '2026-05-02', pdf: 'assets/pdfs/JamfNowLabEG.pdf' },
    'okta-iam-lab': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'infra', tech: [['cyan', 'Okta'], ['amber', 'IAM'], ['blue', 'SAML']], title: 'Okta Identity and Access Management Lab', stack: 'Okta OIE · SAML 2.0 · Google Workspace · Cloudflare DNS', desc: 'Executed a complete employee identity lifecycle on a live Okta tenant as measured by a fully functional Google Workspace SAML 2.0 SSO flow verified end-to-end, MFA enrollment confirmed inline via Okta Verify FastPass under a phishing-resistant Authentication Policy, and a complete System Log audit trail capturing every administrative action from account creation through deactivation, by provisioning users and groups, configuring a Global Session Policy and custom Authentication Policy, integrating Google Workspace via the Okta Integration Network, troubleshooting an SSO initialization failure using the Okta System Log, performing password and MFA resets, and offboarding via account deactivation on a real domain with live DNS.', listed: '2026-05-02', pdf: 'assets/pdfs/OktaLabEG.pdf' },
    'ransomware-sim': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['red', 'Bash Bunny'], ['amber', 'PowerShell']], title: 'Windows Ransomware Simulation Capstone', stack: 'Bash Bunny · PowerShell · VMware', desc: 'Demonstrated a full ransomware lifecycle in an isolated lab environment as measured by confirmed file encryption across Desktop, Documents, and Downloads, verified Windows Defender bypass, startup persistence across reboot, and a ransom alert deployed to the desktop by scripting a Bash Bunny payload that opened elevated PowerShell, copied and executed a custom encryption binary, and planted a startup shortcut on a Windows 10 VMware VM.', listed: '2026-03-28', pdf: 'assets/pdfs/RansomwareSimulationCapstone-Project.pdf' },
    'homelab-red-blue': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['red', 'Nessus'], ['green', 'Kali']], title: 'Advanced Red/Blue Team Homelab', stack: 'VMware · Kali · Nessus · Metasploitable 2', desc: 'Identified and validated live vulnerability exposure on an intentionally vulnerable target as measured by Nessus CVSS-scored findings including a CVSS 5.3 HTTP TRACE/TRACK exposure on Apache 2.2.8 and confirmed exploit execution via curl by deploying an isolated VMware lab with Kali Linux as the attack platform and running authenticated Nessus scans against Metasploitable 2.', listed: '2026-03-28', pdf: 'assets/pdfs/HomelabAttackAndDefense-Project.pdf' },
    'ad-ir-lab': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['blue', 'AD'], ['green', 'VMware']], title: 'Virtual Domain Controller Lab', stack: 'Windows Server 2019 · VMware Workstation Pro · Active Directory', desc: 'Provisioned a functional Active Directory lab environment as measured by a successfully domain-joined Windows 10 VM, confirmed VM-to-VM ping reachability, and a provisioned domain user account by deploying Windows Server 2019 as a domain controller and a Windows 10 client in VMware Workstation Pro with host-only and NAT virtual network adapters.', listed: '2026-03-28', pdf: 'assets/pdfs/VirtualDomainController-Lab.pdf' },
    'kubernetes-security': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'infra', tech: [['cyan', 'K8s'], ['purple', 'seccomp']], title: 'Kubernetes Cluster Implementation & Security', stack: 'Minikube · kubectl · seccomp · AppArmor', desc: 'Deployed and verified a local Kubernetes cluster as measured by a healthy Minikube node (v1.35.0), all essential system pods passing kubectl health checks, and a live nginx application accessible in a browser on port 80 by installing kubectl via Snap, configuring Minikube with Docker v28.1.1 as the container runtime backend, and deploying a containerized web application.', listed: '2026-03-28', pdf: 'assets/pdfs/KubernetesClusterImplementation-Project.pdf' },
    'docker-hardening': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'infra', tech: [['cyan', 'Docker'], ['purple', 'seccomp']], title: 'Docker Container Deployment & Hardening', stack: 'Docker · Podman · seccomp', desc: 'Containerized five services and verified runtime hardening as measured by a MySQL container accessible on TCP 3306, two web apps confirmed reachable in a browser on port 80, and a custom seccomp profile verified to block mkdir syscalls by deploying Docker containers in detached and interactive modes, writing a JSON seccomp profile, and validating syscall enforcement against the profile.', listed: '2026-03-28', pdf: 'assets/pdfs/DockerDeployment-Lab.pdf' },
    'pihole-dns': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['amber', 'DNS'], ['green', 'Bash']], title: 'Network-Wide PiHole + Unbound DNS Server', stack: 'Ubuntu 24.04 · PiHole · Netplan · Router-level DNS', desc: 'Eliminated network-wide ad and tracker traffic as measured by 58,198 blocked queries out of 312,851 total DNS requests (18.6% block rate) and 101,339 unique domains on the blocklist over one week by deploying PiHole with Unbound recursive resolver on Ubuntu Server 24.04, assigning a static IP via Netplan, hardening SSH to key-only auth, enabling UFW, and enforcing the PiHole as the primary DNS server at the router level.', listed: '2026-03-28', pdf: 'assets/pdfs/PiHoleProject.pdf' },
    'enterprise-network': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco'], ['amber', 'Packet Tracer']], title: 'Enterprise Network Security Challenge', stack: 'Cisco Packet Tracer · 20+ devices · ACLs · NAT · DMZ', desc: 'Designed and secured a full multi-site enterprise network as measured by verified OSPF neighbor adjacencies with default route injection, functional PAT translations confirmed via show ip nat translations, ACL-enforced DMZ isolation, and SSH-only management restricted to a single IP across 20+ devices by configuring VLANs, STP root bridge election, dynamic routing, DHCP with helper addresses, DNS, and NAT/PAT in Cisco Packet Tracer.', listed: '2026-03-28', pdf: 'assets/pdfs/InternetSecurityChallenge-Lab.pdf' },
    'exploit-workstation': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['red', 'Metasploit'], ['green', 'Bash']], title: 'Exploiting a Vulnerable Workstation', stack: 'Metasploit · Nmap · Kali Linux', desc: 'Executed a full exploitation chain against a vulnerable Linux target as measured by root-level shell access confirmed via whoami and ifconfig outputs and 10 documented critical Nessus findings (including Ghostcat, bind shell backdoor, and OpenSSH/OpenSSL key weakness) by scanning with Zenmap, running authenticated Nessus vulnerability scans, and exploiting the vstftpd 2.3.4 backdoor via Metasploit from Kali Linux.', listed: '2026-03-28', pdf: 'assets/pdfs/ExploitingAVulnerableWorkstation-Lab.pdf' },
    'osint-recon': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['amber', 'OSINT']], title: 'OSINT and Reconnaissance Lab', stack: 'Maltego · Shodan · Recon-ng', desc: 'Mapped the full public attack surface of a target organization as measured by 100+ harvested email addresses, enumerated ASN records, active IP ranges, and full subdomain coverage for Marist.edu by running multi-tool passive reconnaissance using Recon-ng, theHarvester, Shodan, SpiderFoot, and Amass.', listed: '2026-03-28', pdf: 'assets/pdfs/OSINTandRconnaissance-Lab.pdf' },
    'corporate-osint': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['amber', 'OSINT']], title: 'Corporate OSINT Research Report', stack: 'Open Source Intelligence', desc: 'Documented the open-source exposure risk of four Fortune 500 organizations as measured by identified spear-phishing targets, CDN and DNS infrastructure details (UltraDNS and Akamai fingerprinting), and network routing data for Apple, Microsoft, Facebook, and Walmart by combining WHOIS queries, nslookup, traceroute, dig, and SOA record analysis.', listed: '2026-03-28', pdf: 'assets/pdfs/CorporateOSINT-ResearchReport.pdf' },
    'web-footprint': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['amber', 'OSINT']], title: 'Website Footprinting Lab', stack: 'Passive + Active Enumeration', desc: 'Conducted passive and active footprinting against a live corporate target as measured by confirmed firewall filtering evidence via timed-out traceroute hops, CDN nameserver enumeration, and full DNS infrastructure mapping for Walmart.com by using Sam Spade, nslookup, WHOIS, traceroute, and SOA record queries to enumerate domain ownership, routing paths, and organizational structure.', listed: '2026-03-28', pdf: 'assets/pdfs/WebsiteFootprinting-Lab.pdf' },
    'ospf-migration': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'OSPF Dynamic Routing Migration', stack: 'Cisco IOS · OSPF', desc: 'Migrated a multi-router network from static routing to OSPF as measured by confirmed OSPF neighbor adjacencies, OSPF-learned routes populated in all routing tables, and a default route injection visible across the topology by configuring OSPF process 1, removing legacy static routes, and verifying convergence with show ip protocols and show ip route in Cisco IOS.', listed: '2026-03-28', pdf: 'assets/pdfs/OSPFDynamicRoutingMigration-Lab.pdf' },
    'site-vpn': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'Site-to-Site VPN Configuration', stack: 'Cisco IOS · IPsec', desc: 'Established an encrypted site-to-site tunnel between two Cisco routers as measured by a confirmed ISAKMP phase 1 SA, an active IPsec phase 2 SA, and incrementing encrypted and decrypted packet counters on both ends by configuring IKE policy, pre-shared keys, transform sets, and crypto maps in Cisco IOS.', listed: '2026-03-28', pdf: 'assets/pdfs/SiteToSiteVPNConfig-Lab.pdf' },
    'sdwan-faucet': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'SDN']], title: 'Faucet SDN Controller Configuration', stack: 'Ryu · Faucet · OpenFlow', desc: 'Configured and validated a software-defined network controller as measured by confirmed ACL enforcement with 100% ICMP packet loss to a blocked host, verified VLAN isolation between segments, and functional inter-VLAN routing by deploying Faucet with OpenVSwitch, writing YAML-based policies, and monitoring dataplane traffic via Prometheus and Grafana dashboards.', listed: '2026-03-28', pdf: 'assets/pdfs/FaucetSDNControllerConfig-Lab.pdf' },
    'acl-config': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'ACL Configuration Lab', stack: 'Cisco IOS', desc: 'Enforced granular layer-4 traffic policy on a corporate network as measured by 6 verified test cases (HTTP for PC1/PC2, HTTPS for PC3/PC4, HTTPS to the DMZ server, SMTP and POP3 to the email server, ICMP to the ISP interface, and implicit deny all) by writing and applying extended ACL 123 on the Edge router in Cisco IOS.', listed: '2026-03-28', pdf: 'assets/pdfs/ACLConfig-Lab.pdf' },
    'acl-zpf': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'ACLs and Zone-Based Policy Firewall', stack: 'Cisco ZPF', desc: 'Protected a simulated corporate network from spoofing and unauthorized traffic as measured by confirmed ACL denials of private-range spoofed traffic with incrementing hit counters, verified PAT translations across a 10-address pool (200.16.20.100 to 200.16.20.110), and ZPF session inspection allowing only FTP and HTTPS while blocking HTTP by configuring anti-spoof ACLs, PAT with a NAT pool, and a Zone-Based Policy Firewall in Cisco IOS.', listed: '2026-03-28', pdf: 'assets/pdfs/ACLsAndZPF-Lab.pdf' },
    'active-disc': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'soc', tech: [['amber', 'Analysis']], title: 'Active Discovery & Malware Analysis', stack: 'Nmap · Wireshark · Behavioral Analysis', desc: 'Identified malicious IOCs embedded in two Office documents as measured by extracted obfuscated VBA macros, confirmed AutoOpen() persistence mechanisms, and behavioral findings from Hybrid Analysis (credential theft, process injection, and mail credential harvesting) by running oledump.py, strings, and file utilities against the samples on a Kali Linux VM.', listed: '2026-03-28', pdf: 'assets/pdfs/ActiveDiscoveryAndMalwareAnalysis-Lab.pdf' },
    'crypto-lab': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'sec', tech: [['purple', 'Crypto']], title: 'Applying Encryption and Hashing Algorithms', stack: 'OpenSSL · Python', desc: 'Demonstrated asymmetric and symmetric cryptographic workflows as measured by successfully encrypted and decrypted GnuPG messages exchanged between two key pairs and hash integrity changes detected via MD5 and SHA-256 comparison after file modification by generating GnuPG key pairs, sharing public keys, encrypting cleartext files, and verifying file integrity with MD5sum and SHA-256sum in a Linux environment.', listed: '2026-03-28', pdf: 'assets/pdfs/ApplyingEncryptionAndHashingAlgorithms-Lab.pdf' },
    'ir-report': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'soc', tech: [['blue', 'IR']], title: 'Incident Response Report', stack: 'DFIR · NIST Framework', desc: 'Contained and eradicated an active endpoint compromise as measured by full malware quarantine confirmed by AVG Business Edition (Avalanche botnet and keylogger removed with zero lateral spread to the corporate network) and updated corporate email filtering policies by following a NIST-aligned IR workflow covering identification, triage, containment, investigation, threat research, eradication, recovery, and lessons-learned documentation.', listed: '2026-03-28', pdf: 'assets/pdfs/IncidentResponseReportExample.pdf' },
    'intervlan': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'Inter-VLAN Routing (Router-on-a-Stick)', stack: 'Cisco IOS · VLANs', desc: 'Enabled full cross-VLAN communication across a 3-switch topology as measured by verified ping reachability between all PCs in different VLANs and confirmed Rapid STP operation by configuring 802.1Q trunk ports, EtherChannel link aggregation, and router-on-a-stick subinterfaces in Cisco Packet Tracer.', listed: '2026-03-28', pdf: 'assets/pdfs/InterVLANRoutingRouterOnAStick-Lab.pdf' },
    'internetwork': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'Internetworking Challenge Lab', stack: 'Cisco IOS · Routing Protocols', desc: 'Built and verified a complex enterprise topology as measured by functional EtherChannel links, OSPF neighbor adjacencies, enforced ACLs, SSH-only management access, and HSRP standby verified on both Layer 3 switches by configuring VLANs, inter-VLAN routing via router-on-a-stick and SVIs, dynamic routing, and high-availability failover in Cisco Packet Tracer.', listed: '2026-03-28', pdf: 'assets/pdfs/InternetworkingChallenge-Lab.pdf' },
    'net-dev-sec': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'Network Device Security and Services', stack: 'Cisco IOS', desc: 'Secured and monitored a multi-router network as measured by confirmed NTP synchronization on Rx2 (synced to 192.168.2.100), Syslog messages forwarded to 192.168.2.100 on UDP 514, and full end-to-end connectivity from Pcx1 to Pcx4 by enabling OSPF dynamic routing, configuring authenticated NTP, deploying a Syslog server, and applying SSH access-class restrictions in Cisco IOS.', listed: '2026-03-28', pdf: 'assets/pdfs/NetworkDeviceSecurityAndServicesLab.pdf' },
    'net-disc': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['amber', 'Research']], title: 'Network Discovery Tools & Techniques', stack: 'Nmap · Passive Recon', desc: 'Evaluated three active network discovery tools as measured by documented use cases, attacker and defender perspectives, and cited peer-reviewed sources for Wireshark, Angry IP Scanner, and OpenVAS by synthesizing academic literature and official tool documentation into a comparative analysis of capabilities and security risks.', listed: '2026-03-28', pdf: 'assets/pdfs/NetworkDiscoveryTools+Techniques-ResearchPaper.pdf' },
    'traffic-analysis': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['green', 'Wireshark']], title: 'Network Traffic Analysis Lab', stack: 'Wireshark · Packet Capture', desc: 'Captured and analyzed four distinct protocol types in an isolated lab network as measured by identified DNS query and response pairs, ICMP packet counts (4 requests and 4 replies), an RDP TCP connection sequence, and SMB credential exposure patterns by configuring VMnet0 network isolation, disabling host firewalls, and performing Wireshark deep-packet inspection on live traffic between a Windows Server and Windows client VM.', listed: '2026-03-28', pdf: 'assets/pdfs/NetworkTrafficAndAnalysis-Lab.pdf' },
    'proto-analysis': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['green', 'Wireshark']], title: 'Protocol Traffic Analysis', stack: 'Wireshark · HTTP · DNS · SMB', desc: 'Captured and classified live unencrypted protocol traffic on hardware lab equipment as measured by verified HTTP GET packets, FTP file transfer frames, and plaintext Telnet session data visible in Wireshark by configuring a SPAN session on a Cisco switch to mirror interface traffic and generating controlled HTTP, FTP, and Telnet sessions from internal hosts.', listed: '2026-03-28', pdf: 'assets/pdfs/ProtocolTrafficAnalysis-Lab.pdf' },
    'static-route': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'Static Routing Lab', stack: 'Cisco IOS', desc: 'Established full inter-network reachability across a multi-router topology as measured by successful ping and tracert verification from all 4 PCs to all destination networks by manually calculating and applying static IP routes on each Cisco router in Cisco Packet Tracer.', listed: '2026-03-28', pdf: 'assets/pdfs/StaticRouting-Lab.pdf' },
    'vlans': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'network', tech: [['blue', 'Cisco']], title: 'VLANs and Port Security', stack: 'Cisco IOS · VLANs', desc: 'Designed and verified a segmented VLAN topology as measured by confirmed intra-VLAN ping reachability across all PC pairs and Switch1 confirmed as the STP root bridge by configuring VTP server mode, 802.1Q trunk encapsulation, VLAN access port assignments, and spanning-tree priority in Cisco Packet Tracer.', listed: '2026-03-28', pdf: 'assets/pdfs/VLANsAndPorts-Lab.pdf' },
    'wan-vuln': { perms: 'lrwxrwxrwx', user: 'ericguz', grp: 'security', tech: [['red', 'Vuln']], title: 'WAN Vulnerability Assessment & Hardening', stack: 'Nessus · Cisco IOS', desc: 'Reduced the attack surface of two Windows servers on a simulated WAN as measured by post-hardening Nmap scans showing only RDP (3389) remaining open and successful quarantine of 4 malware files (including achtung.exe and a Trojan dropper) by running Nmap OS fingerprint scans, removing malware with AVG, disabling unnecessary firewall rules and open ports, and restricting RDP access to approved IPs only.', listed: '2026-03-28', pdf: 'assets/pdfs/WANVulnerabilityAssesmentAndHardening-Lab.pdf' },
  },

  // ── CATEGORY ARRAYS — list project keys in display order ──
  featured: ['soc-homelab-siem', 'helpdesk-lab', 'jamf-mdm-lab', 'okta-iam-lab', 'ransomware-sim', 'homelab-red-blue', 'kubernetes-security', 'docker-hardening', 'pihole-dns', 'enterprise-network'],
  soc: ['soc-homelab-siem', 'ad-ir-lab', 'traffic-analysis', 'proto-analysis'],
  offensive: ['ransomware-sim', 'homelab-red-blue', 'exploit-workstation', 'osint-recon', 'corporate-osint', 'web-footprint'],
  infra: ['helpdesk-lab', 'jamf-mdm-lab', 'docker-hardening', 'kubernetes-security', 'okta-iam-lab'],
  network: ['enterprise-network', 'ospf-migration', 'site-vpn', 'sdwan-faucet', 'traffic-analysis', 'proto-analysis', 'net-disc', 'pihole-dns'],
  labs: ['soc-homelab-siem', 'helpdesk-lab', 'jamf-mdm-lab', 'okta-iam-lab', 'ransomware-sim', 'homelab-red-blue', 'ad-ir-lab', 'kubernetes-security', 'docker-hardening', 'pihole-dns', 'enterprise-network', 'exploit-workstation', 'osint-recon', 'corporate-osint', 'web-footprint', 'ospf-migration', 'site-vpn', 'sdwan-faucet', 'acl-config', 'acl-zpf', 'active-disc', 'crypto-lab', 'ir-report', 'intervlan', 'internetwork', 'net-dev-sec', 'net-disc', 'traffic-analysis', 'proto-analysis', 'static-route', 'vlans', 'wan-vuln'],
};

// ── HOMELAB ──
// Edit devices and links to match your actual network topology.
// x/y are percentage positions on the canvas (0–100).
// type: 'router' | 'switch' | 'ap' | 'server' | 'workstation'
// services: { name, tool, status: 'active' | 'disabled' }
const HOMELAB = {
  devices: [
    { id: 'router', label: 'Main Router', type: 'router', sublabel: 'Gateway', x: 50, y: 8, services: [] },
    { id: 'sw2', label: 'Distribution Switch', type: 'switch', sublabel: 'Unmanaged', x: 50, y: 30, services: [] },
    { id: 'sw1', label: 'Core Switch', type: 'switch', sublabel: 'Managed', x: 28, y: 54, services: [] },
    { id: 'sw3', label: 'Access Switch', type: 'switch', sublabel: 'Unmanaged', x: 72, y: 54, services: [] },
    { id: 'ap', label: 'Wireless AP', type: 'ap', sublabel: null, x: 10, y: 80, services: [] },
    {
      id: 'serverA', label: 'Server A', type: 'server', sublabel: 'Ubuntu Server',
      internetFacing: true, x: 22, y: 80,
      services: [
        { name: 'DNS / Ad Blocking', tool: 'Pi-hole', status: 'active' },
        { name: 'Reverse Proxy', tool: 'Nginx', status: 'active' },
        { name: 'Containerization', tool: 'Docker', status: 'active' },
        { name: 'File Sharing', tool: 'Samba', status: 'active' },
        { name: 'VPN Mesh', tool: 'Tailscale', status: 'active' },
        { name: 'Intrusion Prevention', tool: 'Fail2ban', status: 'active' },
        { name: 'Host Firewall', tool: 'UFW', status: 'active' },
        { name: 'Ticketing System', tool: 'osTicket', status: 'disabled' },
        { name: 'Database', tool: 'MySQL', status: 'active' },
        { name: 'PHP Runtime', tool: 'PHP-FPM', status: 'active' },
      ]
    },
    {
      id: 'serverB', label: 'Server B', type: 'server', sublabel: 'AlmaLinux Server',
      accent: true, x: 36, y: 80,
      services: [
        { name: 'SIEM', tool: 'Splunk', status: 'active' },
        { name: 'EDR / XDR', tool: 'Wazuh', status: 'active' },
        { name: 'Network IDS', tool: 'Suricata', status: 'active' },
        { name: 'Intrusion Prevention', tool: 'Fail2ban', status: 'active' },
        { name: 'Host Firewall', tool: 'Firewalld', status: 'active' },
        { name: 'Audit Logging', tool: 'Auditd', status: 'active' },
      ]
    },
    { id: 'linuxws', label: 'Linux Workstation', type: 'workstation', sublabel: null, x: 50, y: 80, services: [] },
    { id: 'winws', label: 'Windows Workstation', type: 'workstation', sublabel: null, x: 72, y: 80, services: [] },
  ],
  links: [
    { from: 'router', to: 'sw2' },
    { from: 'sw2', to: 'sw1' },
    { from: 'sw2', to: 'sw3' },
    { from: 'sw1', to: 'ap' },
    { from: 'sw1', to: 'serverA' },
    { from: 'sw1', to: 'serverB' },
    { from: 'sw1', to: 'linuxws' },
    { from: 'sw3', to: 'winws' },
  ]
};
