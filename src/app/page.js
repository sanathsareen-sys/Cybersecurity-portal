"use client";

import { useState, useEffect } from "react";

export default function CyberSecurityTrainingPortal() {
  const [activeModule, setActiveModule] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [completed, setCompleted] = useState([]);
  const [quizResults, setQuizResults] = useState({});
  const [topicQuizResults, setTopicQuizResults] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInEmployee, setLoggedInEmployee] = useState("");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    phone: "+1 7052210106",
  });
  const [emailLinkSent, setEmailLinkSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [loginCodeSent, setLoginCodeSent] = useState(false);
  const [loginCode, setLoginCode] = useState("");
  const [enteredLoginCode, setEnteredLoginCode] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [employees] = useState([
    {
      name: "Sanath Sareen",
      department: "IT",
      phone: "+1 7052210106",
      completed: 3,
      compliance: "Compliant",
    },
    {
      name: "Sarah Lee",
      department: "Finance",
      phone: "+1 7052210106",
      completed: 2,
      compliance: "Pending",
    },
  ]);

  const [assessmentQuestionIndex, setAssessmentQuestionIndex] = useState(0);
  const [assessmentResults, setAssessmentResults] = useState({});
  const [trainingLogs, setTrainingLogs] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setAssessmentQuestionIndex(0);
    setAssessmentResults({});
    setSelectedAnswer(null);
  }, [activeModule]);

  const trainingContent = {
    1: {
      overview:
        "Cybersecurity awareness helps employees understand how to protect systems, passwords, devices, and company information from cyber threats.",
      importance: "Strong security practices are the first line of defense against attackers. Employee vigilance prevents the majority of security breaches.",
      topics: [
        {
          title: "Strong Password Practices",
          description: "Creating a strong password is essential for protecting your digital identity. A strong password should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters. Avoid using easily guessable information such as birthdays, names of family members, or common words. Instead, consider using passphrases or random combinations that are memorable to you but hard for others to guess. Password strength is measured by complexity and length, making it resistant to various cracking methods.",
          whatItMeans: "In the context of cybersecurity, a strong password serves as a critical barrier against unauthorized access. Attackers use various methods like dictionary attacks, where they try common words, or brute-force attacks, where they systematically try all possible combinations. By making your password complex and lengthy, you exponentially increase the time and resources required for an attacker to crack it, effectively protecting your accounts from compromise. Strong passwords are the foundation of good security hygiene.",
          howAttackerExploit: "Cybercriminals employ sophisticated tools and techniques to crack weak passwords. For instance, they use rainbow tables to reverse hashed passwords, or employ social engineering to guess personal details. Automated scripts can attempt thousands of password combinations per second. Once a weak password is compromised, attackers can gain access to email, financial accounts, or sensitive company data, leading to further exploits like identity theft or data breaches.",
          ifIgnored: "Failing to use strong passwords leaves accounts vulnerable to quick compromise. This can result in immediate theft of personal information, financial loss, or escalation to larger breaches where attackers use the compromised account as a stepping stone to access more systems. Weak passwords are often the entry point for major cyber incidents.",
          companyImpact: "Weak passwords in a corporate environment can lead to significant security incidents. A single compromised employee account can expose sensitive company data, intellectual property, or customer information. This may result in regulatory fines, loss of customer trust, reputational damage, and costly remediation efforts. In extreme cases, it can lead to business disruption or legal liabilities under data protection laws.",
          realWorldRisks: ["Account takeover leading to identity theft", "Unauthorized access to corporate networks", "Data breaches exposing sensitive information", "Financial fraud through compromised banking credentials", "Ransomware deployment via infected systems"],
        },
        {
          title: "Social Engineering",
          description: "Social engineering attacks manipulate people into revealing sensitive information through deception or urgency. Attackers often impersonate trusted figures like IT support, colleagues, or authorities to build trust and extract confidential data. Common tactics include phishing, pretexting, baiting, and quid pro quo. Understanding these methods helps employees recognize and resist manipulation attempts.",
          whatItMeans: "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers research their targets through social media, company websites, or public records to craft convincing stories. By creating a sense of urgency or authority, they trick individuals into bypassing normal security protocols. This form of attack is particularly dangerous because it doesn't require advanced technical skills and can be highly effective against even security-aware people.",
          howAttackerExploit: "Criminals use various social engineering techniques. For example, they might call pretending to be from IT, claiming there's an urgent issue with your account. They could send emails with fake invoices or offers that seem too good to be true. On social media, they might pose as friends or colleagues to gather information. Once they have the initial information, they can escalate to more sophisticated attacks.",
          ifIgnored: "Employees who fall for social engineering can unknowingly provide attackers with passwords, access codes, or sensitive business information. This can lead to immediate account compromise and potentially expose the entire organization's network to further attacks. Social engineering is responsible for a significant portion of successful cyber breaches.",
          companyImpact: "Social engineering breaches can have devastating effects on businesses. They can result in data theft, financial fraud, intellectual property loss, and operational disruption. Companies may face regulatory penalties, lawsuits, and loss of customer confidence. The damage extends beyond immediate losses to long-term reputational harm and increased insurance costs.",
          realWorldRisks: ["Credential disclosure leading to account takeover", "Unauthorized access to company systems", "Data breach and information theft", "Financial fraud and wire transfers", "Ransomware installation and deployment", "Business email compromise"],
        },
      ],
    },
    2: {
      overview:
        "Multi-Factor Authentication (MFA) adds an extra layer of protection by requiring additional verification beyond passwords.",
      importance: "MFA significantly reduces the risk of account compromise even if passwords are stolen. It's one of the most effective security controls.",
      topics: [
        {
          title: "How MFA Works",
          description: "Multi-Factor Authentication (MFA) adds an extra layer of protection by requiring additional verification beyond passwords. It combines multiple factors: something you know (password), something you have (phone or token), and something you are (biometric). This makes it much harder for attackers to gain access even if they have your password.",
          whatItMeans: "MFA significantly enhances security by requiring proof from multiple categories. Even if an attacker obtains your password through phishing or a breach, they still need access to your second factor, such as your phone or a hardware token. This creates multiple barriers that must be overcome, dramatically reducing the risk of unauthorized access.",
          howAttackerExploit: "While MFA is highly effective, attackers have developed methods to bypass it. These include SIM swapping, where they convince your mobile provider to transfer your number to their device, or phishing for MFA codes. MFA fatigue attacks bombard users with approval requests hoping they'll accidentally approve. However, these methods are more complex and risky for attackers.",
          ifIgnored: "Without MFA, accounts are vulnerable to compromise from stolen passwords alone. This leaves systems open to unauthorized access, data theft, and further attacks. MFA is considered a basic security measure in modern cybersecurity frameworks.",
          companyImpact: "Implementing MFA across an organization significantly reduces the risk of breaches. It protects against credential stuffing attacks and prevents attackers from easily moving laterally within networks. Companies without MFA are at much higher risk of data breaches, which can lead to substantial financial and reputational damage.",
          realWorldRisks: ["Account takeover despite password theft", "Prevention of unauthorized system access", "Reduction in data breach incidents", "Protection against credential-based attacks", "Enhanced overall security posture"],
        },
        {
          title: "MFA Fatigue Attacks",
          description: "MFA fatigue attacks involve attackers repeatedly sending MFA approval requests to a target account after obtaining the password. The goal is to overwhelm the user with notifications until they accidentally approve one, granting access. This tactic exploits human error and impatience.",
          whatItMeans: "In an MFA fatigue attack, the attacker has already compromised the password but needs the second factor. By sending dozens or hundreds of push notifications or SMS codes, they hope the legitimate user will approve one out of frustration or confusion. This highlights how even strong security measures can be undermined by human factors.",
          howAttackerExploit: "After stealing credentials, attackers use automated tools to trigger MFA prompts continuously. They may use scripts to send repeated requests or integrate with compromised systems. The attack relies on the target's annoyance leading to a momentary lapse in judgment.",
          ifIgnored: "Users who approve unsolicited MFA requests give attackers full access to their accounts. This can lead to immediate data theft, account misuse, or escalation to broader network compromise. Awareness and caution are crucial to prevent these attacks.",
          companyImpact: "MFA fatigue can result in successful account takeovers, leading to data breaches, financial losses, and system compromise. Organizations should educate employees on recognizing and reporting suspicious MFA activity to mitigate this threat.",
          realWorldRisks: ["Account compromise through user error", "Unauthorized access to sensitive systems", "Data exfiltration and theft", "Financial fraud via compromised accounts", "Potential for ransomware deployment"],
        },
      ],
    },
    3: {
      overview:
        "Email security training teaches employees how to recognize phishing, malicious attachments, spoofing, and fraudulent communications.",
      importance: "Email is the primary attack vector for 90% of cyberattacks. Recognizing phishing is critical to preventing breaches.",
      topics: [
        {
          title: "Phishing Emails",
          description: "Phishing emails are fraudulent messages designed to trick recipients into revealing sensitive information or performing actions that compromise security. They often create urgency, use spoofed sender addresses, and contain malicious links or attachments. Recognizing phishing is crucial for email security.",
          image: "https://images.unsplash.com/photo-1588514728556-3c6b5d5a4b0f?auto=format&fit=crop&w=1200&q=80",
          whatItMeans: "Phishing attacks use deception to manipulate users into clicking links, downloading files, or providing credentials. Attackers craft emails that appear legitimate, often mimicking trusted organizations. Once clicked, links lead to fake sites that steal information, or attachments install malware.",
          howAttackerExploit: "Phishers use social engineering to craft convincing emails. They research targets to personalize messages, create fake websites that look real, and use urgency to pressure quick action. Advanced phishing includes spear-phishing, targeting specific individuals with detailed information.",
          ifIgnored: "Clicking phishing links or opening attachments can lead to credential theft, malware infection, or system compromise. This often results in data breaches, financial loss, and further attacks on the network.",
          companyImpact: "Phishing is a leading cause of breaches. Successful attacks can expose customer data, intellectual property, and financial information. Companies face fines, lawsuits, and reputational damage. Implementing training and technical controls is essential.",
          realWorldRisks: ["Credential theft and account takeover", "Malware infection and system compromise", "Data breach and information loss", "Financial fraud and unauthorized transactions", "Ransomware deployment", "Business disruption"],
        },
        {
          title: "Safe Attachments",
          description: "Email attachments can contain malware, ransomware, or other threats. Safe practices include verifying senders, scanning files, and avoiding opening unexpected attachments. Even familiar file types can be dangerous if modified.",
          image: "https://images.unsplash.com/photo-1581093588401-5b3a3a7f61f9?auto=format&fit=crop&w=1200&q=80",
          whatItMeans: "Attachments are a common malware delivery method. Attackers embed malicious code in documents, executables, or macros. Opening them can install keyloggers, ransomware, or backdoors, giving attackers persistent access.",
          howAttackerExploit: "Criminals send emails with infected attachments disguised as invoices, resumes, or updates. Macros in Office documents can run code when enabled. Once opened, malware can spread to networks or encrypt files for ransom.",
          ifIgnored: "Opening malicious attachments can lead to immediate infection, data loss, or system compromise. Ransomware can encrypt entire networks, demanding payment. Prevention requires caution and technical safeguards.",
          companyImpact: "Attachment-based attacks can cause widespread damage, including data loss, operational downtime, and ransom payments. Organizations must train employees and use email filtering to prevent these incidents.",
          realWorldRisks: ["Ransomware infection and file encryption", "Data theft and exfiltration", "System compromise and unauthorized access", "Network spread of malware", "Financial extortion", "Business interruption"],
        },
      ],
    },
    4: {
      overview:
        "Network security protects your organization's network infrastructure from unauthorized access, misuse, and modifications. Understand firewalls, VPNs, and intrusion detection systems.",
      importance: "A strong network security posture prevents attackers from accessing sensitive company data and disrupting business operations. Network breaches can compromise entire organizations.",
      topics: [
        {
          title: "Firewalls and Network Protection",
          description: "Firewalls are critical network security tools that monitor and control incoming and outgoing network traffic based on predetermined security rules. A firewall acts as a barrier between your trusted internal network and untrusted external networks. Firewalls can be hardware-based, protecting entire networks, or software-based, protecting individual devices. Modern firewalls also perform deep packet inspection and can identify and block sophisticated threats. Understanding firewall rules and proper network segmentation is essential for maintaining a secure infrastructure.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
          whatItMeans: "A firewall examines all network traffic and applies rules to allow or block specific types of traffic. It uses information like IP addresses, ports, and protocols to make decisions. Firewalls create a controlled perimeter around your network, allowing legitimate traffic while blocking potential threats. They are the first line of defense against external attacks.",
          howAttackerExploit: "Attackers attempt to bypass firewalls through various methods. They may probe for open ports, exploit firewall misconfigurations, or use techniques like port forwarding and tunneling to reach protected systems. Advanced attackers may craft packets that evade firewall detection or exploit zero-day vulnerabilities. Improperly configured firewalls can create security gaps.",
          ifIgnored: "Without firewalls, all network traffic flows freely without inspection. This allows attackers direct access to internal systems and sensitive data. Networks can be compromised quickly without proper boundary protection. Business operations and data confidentiality are severely at risk.",
          companyImpact: "Inadequate firewall protection can lead to network breaches, data theft, ransomware infections, and business disruption. Companies may face regulatory fines, customer liability, and reputational damage. Network attacks can cost organizations millions in recovery and remediation.",
          realWorldRisks: ["Unauthorized access to internal systems", "Data theft and exfiltration", "Malware and ransomware injection", "Denial of Service attacks", "Network reconnaissance and exploitation", "Lateral movement through networks"],
        },
        {
          title: "VPN and Secure Connections",
          description: "Virtual Private Networks (VPNs) create encrypted tunnels for data transmission, securing communications over untrusted networks like the public internet. VPNs protect data from interception and eavesdropping by encrypting all traffic between your device and the VPN server. VPNs are essential for remote workers accessing company resources, ensuring sensitive data remains protected even when using public WiFi. A well-configured VPN also masks your IP address and location.",
          image: "https://images.unsplash.com/photo-1516321318423-f06920feaa3a?auto=format&fit=crop&w=900&q=80",
          whatItMeans: "A VPN encrypts your internet traffic and routes it through a secure server, hiding your real IP address and location. This creates a protected tunnel that prevents eavesdropping. All data transmitted through a VPN is encrypted, making it unreadable to unauthorized parties, even if they intercept it.",
          howAttackerExploit: "Attackers exploit weak VPN implementations, outdated encryption protocols, or misconfigured VPN servers. They may perform man-in-the-middle attacks if encryption is weak, or target VPN clients with malware. Using untrusted VPN services can also expose data to third parties. Unencrypted data or weak credentials bypass VPN security.",
          ifIgnored: "Without VPN protection, sensitive data transmitted over public networks is vulnerable to interception. Passwords, credentials, and confidential information can be easily captured by attackers. Remote workers face significant risk of data breach and account compromise.",
          companyImpact: "Lack of VPN protection exposes company data during transmission. Remote employees become vulnerable to credential theft, leading to unauthorized access. Companies may suffer data breaches affecting customers and facing regulatory penalties. Loss of confidential information damages competitive advantage.",
          realWorldRisks: ["Man-in-the-middle attacks capturing credentials", "Data interception over public WiFi", "Session hijacking and account takeover", "Exposure of sensitive business communications", "Credential theft from remote workers", "Competitive intelligence leakage"],
        },
      ],
    },
  };

  const topicImages = [
    {
      title: "Hacker Attack",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      alt: "Hacker attacking a system",
    },
    {
      title: "Data Breach",
      src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80",
      alt: "Data breach visualization",
    },
    {
      title: "Email Security",
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=900&q=80",
      alt: "Email security prevention",
    },
    {
      title: "Network Security",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      alt: "Network security and firewall protection",
    },
  ];

  const topicQuizzes = {
    "1-0": { // Module 1, Topic 0 (Strong Password Practices)
      questions: [
        {
          question: "Which of the following is a strong password?",
          options: ["123456", "Password123", "MyDog#2024@Secure!", "qwerty"],
          correct: 2,
        },
        {
          question: "What is the minimum recommended password length?",
          options: ["6 characters", "8 characters", "12 characters", "16 characters"],
          correct: 2,
        },
        {
          question: "Why should you avoid using birthdays in passwords?",
          options: ["They are too long", "They are easily guessable from social media", "They don't contain special characters", "They are too common"],
          correct: 1,
        },
        {
          question: "How many seconds does it take to crack a simple 6-character password?",
          options: ["Several hours", "Several weeks", "Less than a second", "Several months"],
          correct: 2,
        },
        {
          question: "Which character types should a strong password contain?",
          options: ["Only numbers", "Only letters", "Uppercase, lowercase, numbers, and symbols", "Only special characters"],
          correct: 2,
        },
        {
          question: "Should you reuse the same password across multiple accounts?",
          options: ["Yes, it's easier to remember", "Yes, it's more secure", "No, if one account is compromised, all are at risk", "No difference in security"],
          correct: 2,
        },
        {
          question: "What is password brute-force attack?",
          options: ["Tricking users into revealing passwords", "Repeatedly trying different password combinations", "Stealing passwords from company files", "Guessing based on personal information"],
          correct: 1,
        },
        {
          question: "How often should you change your passwords?",
          options: ["Every month", "Every 3-6 months or if compromised", "Once a year", "Never, if the password is strong"],
          correct: 1,
        },
        {
          question: "What is a password manager?",
          options: ["A person who manages passwords", "Software that securely stores and manages passwords", "A file on your desktop", "An email service"],
          correct: 1,
        },
        {
          question: "Should you write down your passwords?",
          options: ["Yes, for backup purposes", "Yes, if stored safely", "No, ever", "Only for work passwords"],
          correct: 2,
        },
        {
          question: "What makes a password vulnerable to dictionary attacks?",
          options: ["Using special characters", "Using common words or names", "Using numbers", "Using uppercase letters"],
          correct: 1,
        },
      ],
    },
    "1-1": { // Module 1, Topic 1 (Social Engineering)
      questions: [
        {
          question: "What is social engineering?",
          options: ["Engineering social media", "Tricking people into revealing sensitive information", "Social networking", "Building engineering societies"],
          correct: 1,
        },
        {
          question: "Which of these is a common social engineering tactic?",
          options: ["Sending a secure email", "Impersonating IT support via phone", "Using strong passwords", "Enabling MFA"],
          correct: 1,
        },
        {
          question: "What is pretexting in social engineering?",
          options: ["Sending messages", "Creating a false scenario to build trust", "Using text messages", "Creating a website"],
          correct: 1,
        },
        {
          question: "How do attackers often research targets for social engineering?",
          options: ["Direct phone calls", "LinkedIn and social media", "Email newsletters", "Company websites only"],
          correct: 1,
        },
        {
          question: "Why is urgency commonly used in social engineering attacks?",
          options: ["It's required by law", "It pressures people to act without thinking", "It makes the email longer", "It improves email delivery"],
          correct: 1,
        },
        {
          question: "What should you do if someone calls claiming to be from IT support?",
          options: ["Give them your password immediately", "Ask for their ID and verify through official channels", "Hang up without responding", "Provide your account number"],
          correct: 1,
        },
        {
          question: "Which of these is a sign of a social engineering attack?",
          options: ["A formal letter from the company", "Unusual requests for sensitive information", "An official company memo", "A scheduled meeting"],
          correct: 1,
        },
        {
          question: "What is baiting?",
          options: ["Fishing bait", "Leaving USB drives or offers to entice people", "Bad email timing", "Creating websites"],
          correct: 1,
        },
        {
          question: "What is quid pro quo in social engineering?",
          options: ["Latin phrase", "Offering a service in exchange for information", "A type of code", "Email protocol"],
          correct: 1,
        },
        {
          question: "How can you protect against social engineering?",
          options: ["Trust everyone", "Verify requests through official channels", "Ignore all communications", "Share information freely"],
          correct: 1,
        },
        {
          question: "What should you do before sharing sensitive information?",
          options: ["Check email address only", "Verify the requester's identity through official channels", "Trust the person's word", "Check if email looks professional"],
          correct: 1,
        },
      ],
    },
    "2-0": { // Module 2, Topic 0 (How MFA Works)
      questions: [
        {
          question: "What does MFA stand for?",
          options: ["Multi-Factor Authentication", "Multiple File Attachment", "Many Form Attempts", "Multi-Function Application"],
          correct: 0,
        },
        {
          question: "How many verification factors does MFA require?",
          options: ["One", "Two or more", "At least three", "Five"],
          correct: 1,
        },
        {
          question: "Which is an example of 'something you know'?",
          options: ["Fingerprint", "Password", "Security key", "Mobile device"],
          correct: 1,
        },
        {
          question: "What does 'something you have' refer to?",
          options: ["Your skills", "Physical object like a phone or security key", "Your knowledge", "Your ID number"],
          correct: 1,
        },
        {
          question: "What is 'something you are' in MFA?",
          options: ["Your occupation", "Biometric data like fingerprints or face recognition", "Your name", "Your email"],
          correct: 1,
        },
        {
          question: "How much more secure is an account with MFA compared to password-only?",
          options: ["10% more secure", "50% more secure", "99.9% more secure", "Equal security"],
          correct: 2,
        },
        {
          question: "Which is a valid second factor for MFA?",
          options: ["Another password", "SMS code to phone", "Email address", "Username"],
          correct: 1,
        },
        {
          question: "What happens if you lose your MFA device?",
          options: ["You lose account access forever", "You can use backup codes or contact support", "The account is deleted", "MFA is disabled"],
          correct: 1,
        },
        {
          question: "Is MFA mandatory in most companies?",
          options: ["No", "Sometimes, depending on security policies", "Only for IT staff", "Never required"],
          correct: 1,
        },
        {
          question: "What is a common type of MFA?",
          options: ["Triple passwords", "Authenticator app generating time-based codes", "Email addresses", "Employee ID numbers"],
          correct: 1,
        },
        {
          question: "How often does an authenticator app generate new codes?",
          options: ["Every minute", "Every 30 seconds", "Every hour", "Once per day"],
          correct: 1,
        },
      ],
    },
    "2-1": { // Module 2, Topic 1 (MFA Fatigue Attacks)
      questions: [
        {
          question: "What is an MFA fatigue attack?",
          options: ["Deleting MFA codes", "Bombarding users with repeated MFA approval requests", "Blocking MFA", "Disabling authenticators"],
          correct: 1,
        },
        {
          question: "What is the attacker's goal in an MFA fatigue attack?",
          options: ["To test your security", "To hope you approve one out of frustration", "To slow down your system", "To learn about MFA"],
          correct: 1,
        },
        {
          question: "When do MFA fatigue attacks typically occur?",
          options: ["During business hours", "After the attacker obtains a password", "Randomly", "Never"],
          correct: 1,
        },
        {
          question: "What should you do if you receive MFA prompts you didn't request?",
          options: ["Approve one randomly", "Ignore and report to IT immediately", "Approve the first one", "Delete the MFA app"],
          correct: 1,
        },
        {
          question: "Why is approving unsolicited MFA dangerous?",
          options: ["It uses battery", "It grants attackers account access", "It's against the law", "It slows your phone"],
          correct: 1,
        },
        {
          question: "Can an attacker access your account without your MFA approval?",
          options: ["Yes, always", "Yes, through alternative methods", "No, they need your approval", "Maybe"],
          correct: 2,
        },
        {
          question: "How many MFA prompts might you receive in an MFA fatigue attack?",
          options: ["1-2", "Dozens in a short period", "Only 5", "None"],
          correct: 1,
        },
        {
          question: "What is a backup code in the context of MFA?",
          options: ["A second password", "A code used to access your account if your MFA device is lost", "Your account number", "A PIN"],
          correct: 1,
        },
        {
          question: "Should you share MFA codes with anyone?",
          options: ["Yes, with IT", "Yes, with friends", "Never share MFA codes", "Only in emergencies"],
          correct: 2,
        },
        {
          question: "What is the best response if an attacker calls claiming to be IT?",
          options: ["Give them your MFA code", "Hang up and contact IT through official channels", "Trust them", "Ask for their password"],
          correct: 1,
        },
        {
          question: "Can MFA fatigue attacks be prevented?",
          options: ["No", "Yes, by being cautious and reporting suspicious activity", "Only with passwords", "Not applicable"],
          correct: 1,
        },
      ],
    },
    "3-0": { // Module 3, Topic 0 (Phishing Emails)
      questions: [
        {
          question: "What is phishing?",
          options: ["Fishing hobby", "Fraudulent emails attempting to steal credentials", "Email marketing", "Spam emails"],
          correct: 1,
        },
        {
          question: "What is a common sign of a phishing email?",
          options: ["Professional logo", "Unexpected urgent requests", "Proper grammar", "Company official address"],
          correct: 1,
        },
        {
          question: "What do phishing emails often request?",
          options: ["Feedback", "Passwords or personal information", "Surveys", "Unsubscribe requests"],
          correct: 1,
        },
        {
          question: "How can you check if a link in an email is safe?",
          options: ["Click it immediately", "Hover over it to see the actual URL", "Trust the text", "Copy-paste it"],
          correct: 1,
        },
        {
          question: "What is a phishing kit?",
          options: ["Fishing equipment", "Software/tool used to create fake websites mimicking legitimate ones", "Email template", "Security software"],
          correct: 1,
        },
        {
          question: "Which is a red flag for phishing?",
          options: ["Formal greeting", "Misspellings and grammar errors", "Company signature", "Contact information"],
          correct: 1,
        },
        {
          question: "What should you do if you accidentally click a phishing link?",
          options: ["Ignore it", "Immediately report it and change your passwords", "Click it again", "Forward it to others"],
          correct: 1,
        },
        {
          question: "Can legitimate companies send you unsolicited emails?",
          options: ["Never", "Rarely, but phishing often mimics this", "Always", "Only to new customers"],
          correct: 1,
        },
        {
          question: "What is spear phishing?",
          options: ["Phishing with a spear", "Targeted phishing aimed at specific individuals or organizations", "Random phishing", "Group phishing"],
          correct: 1,
        },
        {
          question: "How should you report a phishing email?",
          options: ["Delete it", "Use the report/spam button and notify IT", "Reply to it", "Forward to random contacts"],
          correct: 1,
        },
        {
          question: "What information should you NEVER provide in response to an unsolicited email?",
          options: ["Your name", "Passwords, PINs, or account numbers", "Your title", "Your department"],
          correct: 1,
        },
      ],
    },
    "3-1": { // Module 3, Topic 1 (Safe Attachments)
      questions: [
        {
          question: "What is a common malware delivery method?",
          options: ["Phone calls", "Email attachments", "Text messages", "Meetings"],
          correct: 1,
        },
        {
          question: "Which file type is most likely to contain malware?",
          options: [".txt files", ".exe or macro-enabled files like .docm", ".jpg images", ".pdf files only"],
          correct: 1,
        },
        {
          question: "Should you open attachments from unknown senders?",
          options: ["Yes, always", "Yes, if the subject line looks legitimate", "No, never", "Yes, if they're small"],
          correct: 2,
        },
        {
          question: "What is a macro in the context of email safety?",
          options: ["A large file", "Embedded code in documents that can run malware", "An attachment size", "A security feature"],
          correct: 1,
        },
        {
          question: "How can you verify an attachment is safe?",
          options: ["Check the file name", "Run antivirus scan before opening", "Trust the sender's email", "Check file size"],
          correct: 1,
        },
        {
          question: "What should you do if an email claims to have an attachment but doesn't?",
          options: ["Ask for it again", "It may be a phishing attempt, verify with sender", "Assume it's spam", "Contact IT"],
          correct: 1,
        },
        {
          question: "Can .pdf files contain malware?",
          options: ["Never", "Rarely", "Yes, if they contain malicious scripts", "Only old PDFs"],
          correct: 2,
        },
        {
          question: "What is ransomware?",
          options: ["Random software", "Malware that encrypts your files and demands payment", "A security tool", "An antivirus"],
          correct: 1,
        },
        {
          question: "How can ransomware spread through attachments?",
          options: ["It can't", "When you open a malicious attachment", "Through file properties", "Only through downloads"],
          correct: 1,
        },
        {
          question: "What should you do before opening an unexpected attachment?",
          options: ["Open immediately", "Contact the sender to verify", "Scan it without opening", "Delete it"],
          correct: 1,
        },
        {
          question: "Can antivirus software catch all malware in attachments?",
          options: ["Yes, 100% guaranteed", "Usually, but new malware may bypass it", "Never", "Only large malware"],
          correct: 1,
        },
      ],
    },
    "4-0": { // Module 4, Topic 0 (Firewalls and Network Protection)
      questions: [
        {
          question: "What is the primary function of a firewall?",
          options: ["To speed up network connections", "To monitor and control incoming/outgoing network traffic", "To increase storage capacity", "To improve WiFi signals"],
          correct: 1,
        },
        {
          question: "Which type of firewall protects an individual device?",
          options: ["Network firewall", "Hardware firewall", "Software firewall", "Cloud firewall"],
          correct: 2,
        },
        {
          question: "What does a firewall use to make decisions about traffic?",
          options: ["Only file size", "IP addresses, ports, and protocols", "Only passwords", "Only time of day"],
          correct: 1,
        },
        {
          question: "What technique do attackers use to bypass firewalls?",
          options: ["Sending emails", "Port forwarding and tunneling", "Using strong passwords", "Enabling MFA"],
          correct: 1,
        },
        {
          question: "What is network segmentation?",
          options: ["Dividing internet bandwidth", "Separating networks into segments with different security levels", "Organizing files", "Compressing data"],
          correct: 1,
        },
        {
          question: "What is deep packet inspection?",
          options: ["Checking only file names", "Examining the contents of data packets in detail", "Measuring internet speed", "Counting network packets"],
          correct: 1,
        },
        {
          question: "Which firewall rule action is most restrictive?",
          options: ["Allow all traffic", "Allow specific traffic and block the rest", "Allow and log all traffic", "Monitor without blocking"],
          correct: 1,
        },
        {
          question: "What is a DMZ in network security?",
          options: ["A type of password", "A buffer zone between trusted and untrusted networks", "An encryption method", "A backup system"],
          correct: 1,
        },
        {
          question: "What risk do improperly configured firewalls pose?",
          options: ["Slow network speed", "Security gaps that attackers can exploit", "Higher costs only", "None, misconfiguration doesn't matter"],
          correct: 1,
        },
        {
          question: "How should firewall rules be managed?",
          options: ["Never change them", "Regularly review and update based on threats", "Change randomly", "Let default settings run"],
          correct: 1,
        },
        {
          question: "What is a zero-trust firewall approach?",
          options: ["Trust all traffic", "Trust no traffic by default and verify all requests", "Block all traffic", "Allow all internal traffic"],
          correct: 1,
        },
      ],
    },
    "4-1": { // Module 4, Topic 1 (VPN and Secure Connections)
      questions: [
        {
          question: "What does VPN stand for?",
          options: ["Very Personal Network", "Virtual Private Network", "Virtual Protection Network", "Verified Private Notice"],
          correct: 1,
        },
        {
          question: "What is the primary purpose of a VPN?",
          options: ["To increase internet speed", "To encrypt data and create a secure tunnel over untrusted networks", "To block ads", "To reduce latency"],
          correct: 1,
        },
        {
          question: "How does a VPN protect your identity?",
          options: ["It deletes your data", "It masks your real IP address and encrypts traffic", "It blocks all websites", "It creates a new identity"],
          correct: 1,
        },
        {
          question: "When should remote workers use a VPN?",
          options: ["Never", "Only on public WiFi", "Always when accessing company resources", "Only during office hours"],
          correct: 2,
        },
        {
          question: "What is a man-in-the-middle attack?",
          options: ["A networking protocol", "An attacker intercepting communications between two parties", "A type of firewall", "A backup service"],
          correct: 1,
        },
        {
          question: "What encryption protocol should a VPN use?",
          options: ["Weak 40-bit encryption", "Outdated SSL only", "Modern strong encryption like AES-256 or TLS", "No encryption needed"],
          correct: 2,
        },
        {
          question: "What risk do untrusted VPN services pose?",
          options: ["None, all VPNs are secure", "They may log your data and expose it to third parties", "They make internet slower", "They require more passwords"],
          correct: 1,
        },
        {
          question: "What is VPN tunneling?",
          options: ["Connecting to social media", "Encapsulating and encrypting data packets through a secure connection", "Mining cryptocurrencies", "Creating backup files"],
          correct: 1,
        },
        {
          question: "What should you check before using a VPN service?",
          options: ["Just download it", "Review its privacy policy, encryption, and security features", "Price only", "Brand name only"],
          correct: 1,
        },
        {
          question: "How does a VPN protect against eavesdropping?",
          options: ["It doesn't protect at all", "It encrypts all traffic, making it unreadable to eavesdroppers", "It blocks the internet", "It deletes data"],
          correct: 1,
        },
        {
          question: "What is split tunneling in VPN?",
          options: ["Using two VPNs", "Some traffic goes through VPN while other traffic goes directly", "Creating multiple accounts", "Backing up data"],
          correct: 1,
        },
      ],
    },
  };

  const submitTopicQuiz = (topicKey, questionIndex, selectedAnswer) => {
    const quiz = topicQuizzes[topicKey];
    const isCorrect = selectedAnswer === quiz.questions[questionIndex].correct;
    
    setTopicQuizResults({
      ...topicQuizResults,
      [`${topicKey}-${questionIndex}`]: isCorrect ? "Passed" : "Failed",
    });
  };

  const getTopicProgress = (topicKey) => {
    const isTopicRead = expandedTopics[topicKey] === true;
    const quiz = topicQuizzes[topicKey];
    
    // Count correct answers for this topic
    let correctCount = 0;
    let totalAttempted = 0;
    
    quiz.questions.forEach((_, questionIndex) => {
      const answerKey = `${topicKey}-${questionIndex}`;
      if (topicQuizResults[answerKey] !== undefined) {
        totalAttempted++;
        if (topicQuizResults[answerKey] === "Passed") {
          correctCount++;
        }
      }
    });
    
    if (!isTopicRead) return 0;
    if (totalAttempted === 0) return 33;
    
    const percentage = (correctCount / quiz.questions.length) * 100;
    if (percentage >= 85) return 100;
    return 67;
  };

  const modules = [
    {
      id: 1,
      title: "Cybersecurity Awareness",
      description:
        "Learn password security, social engineering awareness, and safe browsing.",
      progress: 75,
      lessons: [
        "Strong Password Practices",
        "Safe Internet Usage",
        "Protecting Company Data",
        "Social Engineering Awareness",
      ],
      questions: [
        {
          question: "What is the minimum recommended length for a strong password?",
          options: ["6 characters", "8 characters", "12 characters", "16 characters"],
          correct: 2,
        },
        {
          question: "Which of the following should NOT be included in a password?",
          options: ["Uppercase letters", "Your birth date", "Numbers", "Special symbols"],
          correct: 1,
        },
        {
          question: "A strong password should include a combination of:",
          options: ["Only letters", "Letters and numbers", "Letters, numbers, and symbols", "Only symbols"],
          correct: 2,
        },
        {
          question: "What type of attack tries common words and phrases?",
          options: ["Brute force attack", "Dictionary attack", "Phishing attack", "Social engineering"],
          correct: 1,
        },
        {
          question: "Why should you avoid reusing passwords across accounts?",
          options: ["It's harder to remember", "If one is compromised, all are at risk", "Passwords expire faster", "It's against company policy"],
          correct: 1,
        },
        {
          question: "What is a password manager used for?",
          options: ["Creating passwords", "Securely storing and generating passwords", "Checking password strength", "Sharing passwords"],
          correct: 1,
        },
        {
          question: "How often should you change your passwords?",
          options: ["Every day", "Every 3-6 months or if compromised", "Once a year", "Never"],
          correct: 1,
        },
        {
          question: "What does a brute force attack involve?",
          options: ["Tricking users", "Trying all possible combinations", "Using social media", "Sending emails"],
          correct: 1,
        },
        {
          question: "Which is a sign of a weak password?",
          options: ["Contains special characters", "Is a common word", "Is longer than 12 characters", "Includes numbers"],
          correct: 1,
        },
        {
          question: "What should you do if you suspect your password is compromised?",
          options: ["Ignore it", "Change it immediately and enable MFA", "Share it with IT", "Use it on other accounts"],
          correct: 1,
        },
      ],
    },
    {
      id: 2,
      title: "MFA Security",
      description:
        "Understand Multi-Factor Authentication and account protection.",
      progress: 40,
      lessons: [
        "What is MFA?",
        "Types of MFA",
        "Setting Up MFA",
        "Preventing MFA Fatigue Attacks",
      ],
      questions: [
        {
          question: "What does MFA stand for?",
          options: ["Multi-Function Authentication", "Multi-Factor Authentication", "Multiple File Access", "Managed Firewall Application"],
          correct: 1,
        },
        {
          question: "How many factors does MFA typically require?",
          options: ["One", "Two or more", "Three only", "Five"],
          correct: 1,
        },
        {
          question: "Which is an example of 'something you have' in MFA?",
          options: ["Password", "Fingerprint", "Mobile phone", "Birth date"],
          correct: 2,
        },
        {
          question: "By what percentage does MFA reduce account compromise risk?",
          options: ["10%", "50%", "99.9%", "100%"],
          correct: 2,
        },
        {
          question: "What is MFA fatigue?",
          options: ["Tired of entering codes", "Repeated MFA prompts to trick users", "MFA not working", "Lost device"],
          correct: 1,
        },
        {
          question: "When does MFA fatigue typically occur?",
          options: ["During login", "After password is stolen", "Randomly", "Never"],
          correct: 1,
        },
        {
          question: "What should you do with unsolicited MFA prompts?",
          options: ["Approve them", "Ignore and report", "Approve one", "Call the number"],
          correct: 1,
        },
        {
          question: "What are backup codes used for in MFA?",
          options: ["Extra passwords", "Access when device is lost", "To share with others", "To reset MFA"],
          correct: 1,
        },
        {
          question: "Should you share MFA codes?",
          options: ["Yes, with IT", "Yes, with trusted colleagues", "Never", "Only in emergencies"],
          correct: 2,
        },
        {
          question: "How often do authenticator app codes change?",
          options: ["Every minute", "Every 30 seconds", "Every 5 minutes", "Once per login"],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Email Security",
      description:
        "Learn how to identify phishing emails and malicious links.",
      progress: 20,
      lessons: [
        "Recognizing Phishing Emails",
        "Safe Attachments",
        "Email Spoofing Awareness",
        "Reporting Suspicious Emails",
      ],
      questions: [
        {
          question: "What is phishing?",
          options: ["Fishing sport", "Fraudulent attempt to obtain sensitive information", "Email marketing", "Spam filtering"],
          correct: 1,
        },
        {
          question: "Which is a common sign of a phishing email?",
          options: ["Professional design", "Urgent requests for action", "Personal greeting", "Company logo"],
          correct: 1,
        },
        {
          question: "How can you verify a suspicious link in an email?",
          options: ["Click it immediately", "Hover over it to see the URL", "Copy and paste", "Ignore it"],
          correct: 1,
        },
        {
          question: "What is a phishing kit?",
          options: ["Fishing equipment", "Tools to create fake login pages", "Email client", "Antivirus software"],
          correct: 1,
        },
        {
          question: "Which is a red flag in an email?",
          options: ["Correct spelling", "Misspellings and poor grammar", "Official signature", "Known sender"],
          correct: 1,
        },
        {
          question: "What to do if you accidentally click a phishing link?",
          options: ["Nothing", "Report and change passwords", "Click more links", "Forward to friends"],
          correct: 1,
        },
        {
          question: "Do legitimate companies send unsolicited emails requesting credentials?",
          options: ["Always", "Rarely, phishing often mimics this", "Never", "Only to new customers"],
          correct: 1,
        },
        {
          question: "What is spear phishing?",
          options: ["Mass phishing", "Targeted phishing at individuals", "Phishing with spears", "Email spoofing"],
          correct: 1,
        },
        {
          question: "How should you report a suspected phishing email?",
          options: ["Delete it", "Use report/spam button and notify IT", "Reply to sender", "Ignore it"],
          correct: 1,
        },
        {
          question: "What information should you NEVER provide via email?",
          options: ["Your name", "Passwords and personal details", "Department", "Job title"],
          correct: 1,
        },
      ],
    },
    {
      id: 4,
      title: "Network Security",
      description:
        "Learn about firewalls, VPNs, and network protection mechanisms to secure your infrastructure.",
      progress: 10,
      lessons: [
        "Firewalls and Network Protection",
        "VPN and Secure Connections",
        "Intrusion Detection Systems",
        "Network Monitoring and Response",
      ],
      questions: [
        {
          question: "What is the primary role of a firewall?",
          options: ["Increase internet speed", "Monitor and control network traffic", "Replace antivirus", "Store data"],
          correct: 1,
        },
        {
          question: "Which encryption should a VPN use?",
          options: ["No encryption", "Weak 40-bit", "Modern AES-256", "Only SSL"],
          correct: 2,
        },
        {
          question: "What is network segmentation?",
          options: ["Deleting files", "Separating networks by security level", "Increasing bandwidth", "Creating WiFi"],
          correct: 1,
        },
        {
          question: "What do attackers use to bypass firewalls?",
          options: ["Strong passwords", "Port forwarding and tunneling", "MFA", "VPN only"],
          correct: 1,
        },
        {
          question: "What is a DMZ?",
          options: ["A password type", "Buffer zone between networks", "Backup system", "WiFi router"],
          correct: 1,
        },
        {
          question: "When should remote workers use VPN?",
          options: ["Never", "On public WiFi only", "Always for company resources", "Only evenings"],
          correct: 2,
        },
        {
          question: "What is deep packet inspection?",
          options: ["Checking file names", "Examining packet contents in detail", "Counting packets", "Blocking all traffic"],
          correct: 1,
        },
        {
          question: "What risk do untrusted VPN services pose?",
          options: ["None", "Data logging and exposure", "Slower speed only", "Higher costs"],
          correct: 1,
        },
        {
          question: "What is a man-in-the-middle attack?",
          options: ["A router", "Intercepting communications between parties", "A firewall", "A type of VPN"],
          correct: 1,
        },
        {
          question: "How should firewall rules be managed?",
          options: ["Never change them", "Regularly review and update", "Change randomly", "Keep defaults only"],
          correct: 1,
        },
      ],
    },
  ];

  const submitQuiz = (moduleId, answer, correct) => {
    const scoreResult = answer === correct ? "Passed" : "Failed";
    setQuizResults({
      ...quizResults,
      [moduleId]: scoreResult,
    });
  };

  const getUserFullName = () => {
    return loggedInEmployee || `${userDetails.firstName} ${userDetails.lastName}`.trim();
  };

  const addCertificateForModule = (moduleId) => {
    const employeeName = getUserFullName();
    const module = modules.find((m) => m.id === moduleId);
    if (!module || !employeeName) return;

    const alreadyExists = certificates.some(
      (cert) => cert.moduleId === moduleId && cert.employee === employeeName
    );
    if (alreadyExists) return;

    const certificate = {
      id: `${moduleId}-${Date.now()}`,
      moduleId,
      moduleTitle: module.title,
      employee: employeeName,
      company: userDetails.companyName,
      date: new Date().toLocaleDateString(),
    };

    setCertificates((prev) => [...prev, certificate]);
    setTrainingLogs((prev) => [
      ...prev,
      {
        employee: certificate.employee,
        company: certificate.company,
        module: certificate.moduleTitle,
        date: certificate.date,
      },
    ]);
  };

  const sendEmailVerificationLink = () => {
    const { firstName, lastName, companyName, companyEmail, phone } = userDetails;

    if (!firstName || !lastName || !companyName || !companyEmail || !phone) {
      setEmailMessage("");
      setLoginError("Please fill in all fields before email verification.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(companyEmail)) {
      setEmailMessage("");
      setLoginError("Please enter a valid company email address.");
      return;
    }

    setEmailLinkSent(true);
    setEmailVerified(false);
    setLoginCodeSent(false);
    setLoginCode("");
    setEnteredLoginCode("");
    setLoginError("");
    setEmailMessage(`Verification link sent to ${companyEmail}. Click the link to verify your email.`);
    setLoginMessage("");
    console.log("Demo email verification link for:", companyEmail);
  };

  const verifyEmailLink = () => {
    if (!emailLinkSent) {
      setEmailVerified(false);
      setLoginError("Please request an email verification link first.");
      return;
    }

    setEmailVerified(true);
    setEmailLinkSent(false);
    setEmailMessage("Email verified successfully. You may now request a login code to your phone.");
    setLoginError("");
    setLoginMessage("");
  };

  const sendLoginCodeToPhone = () => {
    if (!emailVerified) {
      setLoginError("Verify your email first before requesting the login code.");
      setLoginMessage("");
      return;
    }

    const phone = userDetails.phone || "";
    // Require Canadian numbers starting with +1 and 10 digits after
    const phoneRegex = /^\+1\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setLoginError("Please enter a valid Canadian phone number starting with +1 and 10 digits (e.g. +17052210106).");
      setLoginMessage("");
      return;
    }

    // Generate secure 6-digit code
    const code = String(Math.floor(100000 + Math.random() * 900000));

    // Call server API to send SMS (server will use Twilio if configured; otherwise mock)
    setLoginError("");
    setLoginMessage("Sending verification code...");

    fetch('/api/send-sms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, code, user: `${userDetails.firstName} ${userDetails.lastName}` })
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to send SMS');
        const payload = await res.json();
        if (payload.ok) {
          setLoginCode(code);
          setLoginCodeSent(true);
          setEnteredLoginCode("");
          setLoginMessage(`Verification code sent to ${phone}. Enter it when prompted to continue.`);
          setEmailMessage("");
          console.log('Sent login code:', code, 'to', phone);
        } else {
          throw new Error(payload.error || 'SMS provider error');
        }
      })
      .catch((err) => {
        console.error(err);
        setLoginError('Unable to send SMS. Please try again later or contact support.');
        setLoginMessage("");
      });
  };

  const verifyLoginCode = () => {
    const isValidCode =
      loginCodeSent &&
      (enteredLoginCode === loginCode || enteredLoginCode === "010101");

    if (isValidCode) {
      setLoggedIn(true);
      setLoggedInEmployee(`${userDetails.firstName} ${userDetails.lastName}`);
      setLoginError("");
      setLoginMessage(`Logged in as ${userDetails.firstName} ${userDetails.lastName}. You may now proceed.`);
      return;
    }

    setLoggedIn(false);
    setLoginError("Invalid login code. Please check the code and try again.");
    setLoginMessage("");
  };

  const startModuleTraining = (module) => {
    if (!loggedIn) {
      setLoginError("Complete phone verification with code 010101 before starting training.");
      setLoginMessage("");
      return;
    }

    setActiveModule(module);
    setLoginError("");
    setLoginMessage(`Training started for ${module.title}.`);
  };

  const generateCertificate = (moduleName) => {
    alert(`Certificate Generated for ${moduleName}`);
  };

  return (
    <div
      className={`min-h-screen transition duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto p-8">
        <div
          className={`rounded-3xl shadow-xl p-8 mb-8 backdrop-blur-lg bg-white/80 dark:bg-gray-900/60 border border-white/10`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 portal-title flex items-center gap-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-icon">
                  <path d="M12 2L3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-3z" fill="#0ea5e9" />
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill="#0369a1" />
                </svg>
                <span>Cybersecurity Training Portal</span>
              </h1>

              <p className="text-lg opacity-80">
                AI-powered employee cybersecurity learning and compliance system.
              </p>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-5 py-3 rounded-2xl bg-black text-white"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Landing hero: importance + topics overview */}
        <div className="rounded-3xl p-12 mb-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 opacity-90" />
          <div className="relative text-white max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-4">Why Cybersecurity Training Matters Today</h2>
            <p className="text-lg opacity-90 mb-6">
              Cyber risks grow every year — phishing, identity theft, ransomware and account takeovers threaten businesses
              of all sizes. Training employees reduces risk, closes human gaps, and turns every team member into a critical
              line of defence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#modules" className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg">Explore Topics</a>
              <button
                onClick={() => { window.scrollTo({ top: 800, behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-full bg-transparent border border-white/40 text-white font-semibold"
              >
                Why This Matters
              </button>
            </div>
          </div>
        </div>

        {/* Topics quick section */}
        <div id="modules" className="grid lg:grid-cols-4 gap-6 mb-10">
          {modules.map((m) => (
            <div key={m.id} className="rounded-2xl p-6 shadow-lg bg-white/90 dark:bg-gray-800/80">
              <h3 className="text-xl font-bold mb-2">{m.title}</h3>
              <p className="text-sm opacity-80 mb-4">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div
            className={`rounded-3xl p-6 shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Employee Login</h2>
            <p className="text-sm opacity-80 mb-6">
              Enter your details, verify your company email, then receive a login code to your phone.
            </p>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={userDetails.firstName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, firstName: e.target.value })
                }
                className="w-full border rounded-2xl p-3"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={userDetails.lastName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lastName: e.target.value })
                }
                className="w-full border rounded-2xl p-3"
              />

              <input
                type="text"
                placeholder="Company Name"
                value={userDetails.companyName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, companyName: e.target.value })
                }
                className="w-full border rounded-2xl p-3"
              />

              <input
                type="email"
                placeholder="Company Email"
                value={userDetails.companyEmail}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, companyEmail: e.target.value })
                }
                className="w-full border rounded-2xl p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
                className="w-full border rounded-2xl p-3"
              />
            </div>

            <button
              onClick={sendEmailVerificationLink}
              className="w-full bg-black text-white py-3 rounded-2xl my-4"
            >
              Send Email Verification Link
            </button>

            {emailLinkSent && (
              <button
                onClick={verifyEmailLink}
                className="w-full bg-blue-600 text-white py-3 rounded-2xl mb-4"
              >
                Confirm Email Verification
              </button>
            )}

            {emailVerified && (
              <button
                onClick={sendLoginCodeToPhone}
                className="w-full bg-green-600 text-white py-3 rounded-2xl mb-4"
              >
                Send Login Code to Phone
              </button>
            )}

            {loginCodeSent && (
              <>
                <input
                  type="text"
                  value={enteredLoginCode}
                  onChange={(e) => setEnteredLoginCode(e.target.value)}
                  placeholder="Enter login code"
                  className="w-full border rounded-2xl p-3 mb-4"
                />

                <button
                  onClick={verifyLoginCode}
                  className={`w-full py-3 rounded-2xl text-white ${
                    !enteredLoginCode ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
                  }`}
                  disabled={!enteredLoginCode}
                >
                  Verify Login Code
                </button>

                <p className="mt-3 text-xs text-gray-500">
                  Demo verification code: <span className="font-semibold">010101</span>
                </p>
              </>
            )}

            {(emailMessage || loginMessage) && (
              <p className="mt-4 text-sm text-green-600">
                {emailMessage || loginMessage}
              </p>
            )}
            {loginError && (
              <p className="mt-4 text-sm text-red-600">{loginError}</p>
            )}
          </div>

          <div className={`lg:col-span-2 rounded-3xl p-6 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <h2 className="text-2xl font-bold mb-4">Security Visual Overview</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {topicImages.map((image, index) => (
                <div key={index} className="rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 bg-gray-900 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-10">
          <div
            className={`rounded-3xl p-6 shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>

            <div className="space-y-4">
              <div className="bg-gray-100 text-black rounded-2xl p-4">
                <p className="font-semibold">Completed Trainings</p>
                <p className="text-3xl mt-2">{completed.length}</p>
              </div>

              <div className="bg-gray-100 text-black rounded-2xl p-4">
                <p className="font-semibold">Certificates Earned</p>
                <p className="text-3xl mt-2">{certificates.length}</p>
              </div>

              <div className="bg-gray-100 text-black rounded-2xl p-4">
                <p className="font-semibold">Compliance Status</p>
                <p className="text-xl mt-2">
                  {completed.length >= 3 ? "Compliant" : "Pending"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`rounded-3xl shadow-lg p-6 transition hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h2 className="text-2xl font-bold mb-3">{module.title}</h2>

                <p className="opacity-80 mb-4">{module.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>

                  <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-black h-3"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  {module.lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gray-100 text-black px-3 py-2 text-sm"
                    >
                      {lesson}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => startModuleTraining(module)}
                  disabled={!loggedIn}
                  className={`w-full py-3 rounded-2xl text-white font-semibold ${
                    loggedIn
                      ? "bg-blue-700 hover:bg-blue-800"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loggedIn ? "Start Training" : "Verify Phone to Start"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {activeModule && (
          <div
            className={`rounded-3xl shadow-xl p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">
              {activeModule.title} Training Session
            </h2>

            <div className="mb-8">
              <div className="bg-gray-100 text-black rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold mb-3">
                  Training Overview
                </h3>
                <p className="mb-4">
                  {trainingContent[activeModule.id].overview}
                </p>
                <p className="font-semibold text-blue-700">
                  Why This Matters: {trainingContent[activeModule.id].importance}
                </p>
              </div>

              <div className="space-y-5">
                {trainingContent[activeModule.id].topics.map((topic, index) => {
                  const topicKey = `${activeModule.id}-${index}`;
                  const isExpanded = expandedTopic === topicKey;
                  const quiz = topicQuizzes[topicKey];
                  
                  return (
                    <div
                      key={index}
                      className="border rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          const newIsExpanded = expandedTopic === topicKey ? null : topicKey;
                          setExpandedTopic(newIsExpanded);
                          if (newIsExpanded === topicKey) {
                            setExpandedTopics(prev => ({
                              ...prev,
                              [topicKey]: true
                            }));
                          }
                        }}
                        className={`w-full p-5 text-left font-semibold text-lg flex justify-between items-center transition ${
                          isExpanded
                            ? "bg-blue-600 text-white"
                            : "bg-white text-blue-700 hover:bg-blue-50"
                        }`}
                      >
                        <span>{topic.title}</span>
                        <span className="text-2xl">{isExpanded ? "−" : "+"}</span>
                      </button>

                      <div className={`px-5 py-3 ${isExpanded ? "bg-blue-50" : "bg-gray-50"}`}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold">Progress</span>
                          <span className="font-semibold">{getTopicProgress(topicKey)}%</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 transition-all ${
                              getTopicProgress(topicKey) >= 85 ? "bg-green-500" : "bg-blue-500"
                            }`}
                            style={{ width: `${getTopicProgress(topicKey)}%` }}
                          />
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="p-5 bg-white space-y-4">
                          <div>
                            <p className="opacity-80">{topic.description}</p>
                          </div>

                          {topic.image && (
                            <div className="rounded-3xl overflow-hidden">
                              <img
                                src={topic.image}
                                alt="Phishing email hacked illustration"
                                className="w-full h-56 object-cover rounded-3xl"
                              />
                              <p className="mt-3 text-sm opacity-80">
                                Phishing email screenshot with a hacked warning.
                              </p>
                            </div>
                          )}

                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                            <h5 className="font-semibold text-blue-800 mb-2">What This Means</h5>
                            <p className="text-sm">{topic.whatItMeans}</p>
                          </div>

                          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                            <h5 className="font-semibold text-orange-800 mb-2">How Attackers Exploit This</h5>
                            <p className="text-sm">{topic.howAttackerExploit}</p>
                          </div>

                          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                            <h5 className="font-semibold text-red-800 mb-2">If You Ignore This</h5>
                            <p className="text-sm">{topic.ifIgnored}</p>
                          </div>

                          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                            <h5 className="font-semibold text-purple-800 mb-2">Impact to Our Company</h5>
                            <p className="text-sm">{topic.companyImpact}</p>
                          </div>

                          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                            <h5 className="font-semibold text-yellow-800 mb-2">Real-World Security Risks</h5>
                            <ul className="text-sm space-y-1">
                              {topic.realWorldRisks.map((risk, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="text-yellow-600 mr-2">•</span>
                                  <span>{risk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Topic Quiz Section */}
                          <div className="border-t-2 pt-6 mt-6">
                            <h5 className="font-bold text-lg mb-4 text-blue-700">Quiz: {topic.title}</h5>
                            <div className="space-y-5">
                              {quiz.questions.map((q, qIndex) => (
                                <div key={qIndex} className="bg-gray-50 p-4 rounded-xl">
                                  <p className="font-semibold mb-3 text-sm">
                                    Q{qIndex + 1}. {q.question}
                                  </p>
                                  <div className="space-y-2">
                                    {q.options.map((option, oIndex) => {
                                      const answerKey = `${topicKey}-${qIndex}`;
                                      const answered = topicQuizResults[answerKey] !== undefined;
                                      const isCorrect = oIndex === q.correct;
                                      const userSelected = topicQuizResults[answerKey];
                                      
                                      return (
                                        <button
                                          key={oIndex}
                                          onClick={() => submitTopicQuiz(topicKey, qIndex, oIndex)}
                                          className={`w-full p-3 rounded-lg text-left transition text-sm ${
                                            answered
                                              ? isCorrect
                                                ? "bg-green-200 text-green-900 border-2 border-green-500"
                                                : oIndex === q.correct
                                                ? "bg-green-100 text-green-900 border-2 border-green-400"
                                                : "bg-red-200 text-red-900 border-2 border-red-500"
                                              : "bg-white border-2 border-gray-300 hover:border-blue-500"
                                          }`}
                                        >
                                          <div className="flex items-center">
                                            <span className="w-6 h-6 flex items-center justify-center mr-2 font-bold">
                                              {String.fromCharCode(65 + oIndex)}.
                                            </span>
                                            {option}
                                            {answered && isCorrect && <span className="ml-auto">✓</span>}
                                            {answered && !isCorrect && oIndex === q.correct && (
                                              <span className="ml-auto text-green-600">✓</span>
                                            )}
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Knowledge Assessment
            </h2>

            <div className="mb-6">
              {assessmentQuestionIndex < 10 ? (
                <>
                  <p className="text-xl font-medium mb-4">
                    Question {assessmentQuestionIndex + 1} of 10: {activeModule.questions[assessmentQuestionIndex].question}
                  </p>

                  <div className="grid gap-3">
                    {activeModule.questions[assessmentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={`border rounded-2xl p-4 text-left transition ${
                          selectedAnswer === index ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100 hover:text-black"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (selectedAnswer !== null) {
                        const isCorrect = selectedAnswer === activeModule.questions[assessmentQuestionIndex].correct;
                        setAssessmentResults(prev => ({ ...prev, [assessmentQuestionIndex]: isCorrect }));
                        if (assessmentQuestionIndex === 9) {
                          const correctCount = Object.values({ ...assessmentResults, [assessmentQuestionIndex]: isCorrect }).filter(Boolean).length;
                          const passed = correctCount >= 7;
                          setQuizResults(prev => ({ ...prev, [activeModule.id]: passed ? "Passed" : "Failed" }));
                          if (passed && !completed.includes(activeModule.id)) {
                            setCompleted(prev => [...prev, activeModule.id]);
                            addCertificateForModule(activeModule.id);
                          }
                        } else {
                          setAssessmentQuestionIndex(prev => prev + 1);
                          setSelectedAnswer(null);
                        }
                      }
                    }}
                    disabled={selectedAnswer === null}
                    className="mt-4 bg-black text-white py-3 px-6 rounded-2xl disabled:opacity-50"
                  >
                    {assessmentQuestionIndex === 9 ? "Submit Assessment" : "Next Question"}
                  </button>
                </>
              ) : null}
            </div>

            {quizResults[activeModule.id] && (
              <>
                <div
                  className={`rounded-2xl p-4 text-lg font-semibold ${
                    quizResults[activeModule.id] === "Passed"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  Assessment Result: {quizResults[activeModule.id]} ({Object.values(assessmentResults).filter(Boolean).length}/10 correct)
                </div>

                {quizResults[activeModule.id] === "Passed" && (
                  <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-6">
                    <h3 className="text-2xl font-bold mb-3">Certificate Ready</h3>
                    <p className="mb-3">
                      Congratulations, {getUserFullName()}! You have completed the {activeModule.title} module.
                    </p>
                    <p className="mb-4 text-sm opacity-80">
                      A certificate for this module has been created under your name and is available in the dashboard below.
                    </p>
                    <button
                      onClick={() => addCertificateForModule(activeModule.id)}
                      className="bg-black text-white py-3 px-6 rounded-2xl"
                    >
                      Ensure Certificate Generated
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {certificates.length > 0 && (
          <div
            className={`rounded-3xl shadow-xl p-8 mt-10 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">Certificate Records</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Employee</th>
                    <th className="text-left p-3">Company</th>
                    <th className="text-left p-3">Certificate</th>
                    <th className="text-left p-3">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {certificates.map((cert, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{cert.employee}</td>
                      <td className="p-3">{cert.company}</td>
                      <td className="p-3">{cert.moduleTitle}</td>
                      <td className="p-3">{cert.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
