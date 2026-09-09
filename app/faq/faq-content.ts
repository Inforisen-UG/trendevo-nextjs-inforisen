import type { FaqItem } from '@/components/sections/faq-section';

export type FaqCategoryData = {
  id: string;
  title: string;
  shortLabel: string;
  subtitle: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategoryData[] = [
  {
    id: "getting-started",
    title: "Getting Started With TrendEvo",
    shortLabel: "Getting Started",
    subtitle: "Everything you need to know before using TrendEvo for the first time.",
    items: [
      {
        question: "What is TrendEvo?",
        answer: "TrendEvo is an SMM panel where businesses, creators, freelancers, agencies, marketers, and resellers can order social media marketing services from one dashboard.\n\nUsers can choose a platform, select a service, enter the required link, place an order, and track progress from their account.",
      },
      {
        question: "What is an SMM panel?",
        answer: "An SMM panel is an online platform that provides social media marketing services such as followers, likes, views, comments, subscribers, members, and other engagement services.\n\nIt helps users manage different social media campaigns from one dashboard.",
      },
      {
        question: "Who can use TrendEvo?",
        answer: "TrendEvo can be used by:\n\n• Businesses\n• Content creators\n• Influencers\n• Freelancers\n• Social media managers\n• Digital marketing agencies\n• Resellers\n• Ecommerce brands\n\nBoth beginners and experienced marketers can use the platform.",
      },
      {
        question: "Do I need experience to use TrendEvo?",
        answer: "No. TrendEvo is designed to be simple.\n\nlnk<Create an account|https://trendevo.com/signup>, add funds, select your service, submit the correct link and quantity, and track the order from your dashboard.",
      },
      {
        question: "Do I need to create an account before ordering?",
        answer: "Yes. You need a TrendEvo account to add funds, place orders, review your order history, request support, and manage your services.",
      },
      {
        question: "Is creating a TrendEvo account free?",
        answer: "Yes. Creating an account does not require you to purchase a service immediately.\n\nYou can lnk<register first|https://trendevo.com/signup> and review available services before placing an order.",
      },
      {
        question: "Which social media platforms does TrendEvo support?",
        answer: "TrendEvo may offer services for platforms such as:\n\n• lnk<Instagram|/instagram-smm-panel>\n• lnk<Facebook|/facebook-smm-panel>\n• lnk<YouTube|/youtube-smm-panel>\n• lnk<TikTok|/tiktok-smm-panel>\n• lnk<Telegram|/telegram-smm-panel>\n• lnk<X|/x-twitter-smm-panel>\n• LinkedIn\n• lnk<Spotify|/spotify-smm-panel>\n• lnk<SoundCloud|/soundcloud-smm-panel>\n• lnk<Snapchat|/snapchat-smm-panel>\n\nAvailable services can change, so always check the current lnk<service list|/services>.",
      },
      {
        question: "What types of services can I order?",
        answer: "Depending on the platform, services may include followers, likes, views, comments, subscribers, members, shares, reactions, watch time, and other forms of social engagement.",
      },
      {
        question: "Can I use TrendEvo from Bangladesh?",
        answer: "Yes. TrendEvo is designed to serve users in Bangladesh as well as customers who manage social media campaigns for other markets.",
      },
      {
        question: "Can beginners use TrendEvo?",
        answer: "Yes.\n\nThe main thing beginners should do is read the service description carefully before ordering. Pay attention to minimum quantity, maximum quantity, estimated start time, refill availability, and link format.",
      },
      {
        question: "Can I check services before adding funds?",
        answer: "Yes. You can review the available services, pricing, order limits, and important service information before deciding what to order.",
      },
      {
        question: "How do I choose the right service?",
        answer: "Start with your goal.\n\nFor example, if you want more visibility on a video, views may be more relevant. If you want stronger social proof on a profile, followers may be more suitable.\n\nAlways compare service quality, price, delivery speed, refill coverage, and requirements.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders",
    shortLabel: "Orders",
    subtitle: "Learn how to place orders correctly and avoid common mistakes.",
    items: [
      {
        question: "How do I place an order on TrendEvo?",
        answer: "After signing in:\n\n1. Go to the New Order section.\n2. Choose the social media platform.\n3. Select the service.\n4. Read the service description.\n5. Enter the required link.\n6. Enter your quantity.\n7. Review the price.\n8. Submit the order.\n\nYou can then track the order from your account.",
      },
      {
        question: "What information do I need to place an order?",
        answer: "Usually, you need:\n\n• The correct profile, post, video, channel, page, or content link\n• Your required quantity\n• Enough account balance\n\nSome services may require additional information, so read the service instructions carefully.",
      },
      {
        question: "What should I check before placing an order?",
        answer: "Always check:\n\n• Service name\n• Target platform\n• Link format\n• Minimum quantity\n• Maximum quantity\n• Estimated start time\n• Estimated delivery speed\n• Refill availability\n• Special requirements",
      },
      {
        question: "How do I know which link to submit?",
        answer: "Use the exact link requested by the service.\n\nFor example, an Instagram followers service may require a profile link, while an Instagram likes service may require a specific post or Reel link.",
      },
      {
        question: "What happens if I enter the wrong link?",
        answer: "Contact support immediately and provide your Order ID.\n\nIf processing has not started, assistance may still be possible. Once delivery begins, changing the target link may no longer be possible.",
      },
      {
        question: "Can I edit an order after submitting it?",
        answer: "Usually, submitted orders cannot be edited directly.\n\nIf you made a mistake, contact support as soon as possible.",
      },
      {
        question: "Can I change the quantity after placing an order?",
        answer: "Normally, no.\n\nIf you need a different quantity, allow the current order to complete and place another order if appropriate.",
      },
      {
        question: "Can I cancel an order?",
        answer: "Cancellation depends on the service and current status.\n\nIf the order has not started, contact support quickly. Once delivery has begun, cancellation may no longer be available.",
      },
      {
        question: "Can I place multiple orders at once?",
        answer: "Yes. You can place multiple orders for different social media accounts, posts, videos, channels, or services.",
      },
      {
        question: "Can I place two identical orders on the same link?",
        answer: "It is better to avoid doing this while the first order is still processing.\n\nOverlapping orders can make delivery and refill calculations difficult.",
      },
      {
        question: "Can I order different services for the same link?",
        answer: "Yes, when the services are compatible.\n\nFor example, you may order both likes and views for the same post.",
      },
      {
        question: "What happens if my account becomes private after I order?",
        answer: "Delivery may stop or fail if the selected service requires public access.\n\nKeep your account or content public until the order is completed.",
      },
      {
        question: "Can I delete the post while an order is running?",
        answer: "No.\n\nDeleting the content can prevent the service from completing and may affect refund or refill eligibility.",
      },
      {
        question: "Can I change my username during an active order?",
        answer: "It is best not to.\n\nChanging usernames or links while an order is processing can interfere with delivery.",
      },
      {
        question: "Is there a minimum order quantity?",
        answer: "Yes. Minimum quantities vary by service.\n\nCheck the service description before submitting your order.",
      },
      {
        question: "Is there a maximum order quantity?",
        answer: "Yes. Each service can have its own maximum limit.\n\nFor larger campaigns, you may need to place multiple orders or contact support.",
      },
    ],
  },
  {
    id: "delivery-status",
    title: "Delivery & Order Status",
    shortLabel: "Delivery & Status",
    subtitle: "Understand what happens after your order is submitted.",
    items: [
      {
        question: "How fast will my order start?",
        answer: "Start time depends on the selected service.\n\nSome may begin quickly, while others need more processing time. Always review the estimated start time before ordering.",
      },
      {
        question: "Does start time mean completion time?",
        answer: "No.\n\nStart time refers to when delivery may begin. Completion time depends on the order quantity, platform, service speed, and current demand.",
      },
      {
        question: "Where can I track my order?",
        answer: "Go to your TrendEvo dashboard and open your order history.\n\nYou can normally see your Order ID, service, charge, quantity, remaining amount, and current status.",
      },
      {
        question: "What does Pending mean?",
        answer: "Pending means your order has been received but has not started processing yet.",
      },
      {
        question: "What does Processing mean?",
        answer: "Processing means the system is preparing your order for delivery.",
      },
      {
        question: "What does In Progress mean?",
        answer: "In Progress means the order is actively being processed or delivered.",
      },
      {
        question: "What does Completed mean?",
        answer: "Completed means TrendEvo's system has finished processing the selected service.\n\nYou should check the target link and compare the result with your starting count.",
      },
      {
        question: "What does Partial mean?",
        answer: "Partial means only part of your requested quantity could be delivered.\n\nThe undelivered portion is normally handled according to the service and refund conditions.",
      },
      {
        question: "What does Canceled mean?",
        answer: "Canceled means the order could not continue.\n\nThis may happen because of an invalid link, private account, service issue, platform restriction, unavailable service, or another processing problem.",
      },
      {
        question: "Why is my order still Pending?",
        answer: "Possible reasons include:\n\n• High order volume\n• Service queue\n• Incorrect link\n• Platform delays\n• Temporary provider issues\n• Service maintenance\n\nCheck the estimated start time before contacting support.",
      },
      {
        question: "Why is my order stuck In Progress?",
        answer: "Some services deliver gradually.\n\nLarge quantities can take longer to complete, and platform conditions may affect delivery speed.",
      },
      {
        question: "My order says Completed but I cannot see everything. What should I do?",
        answer: "First, refresh the platform and check the current count carefully.\n\nSome platforms update statistics with delays. If there is still a clear difference, contact support with your Order ID.",
      },
      {
        question: "Why did my order start slowly?",
        answer: "Delivery speed can vary because of platform updates, service demand, order size, or the selected service type.",
      },
      {
        question: "Can TrendEvo speed up my order?",
        answer: "Delivery speed usually follows the selected service.\n\nSupport may check unusually delayed orders, but faster completion cannot always be guaranteed.",
      },
      {
        question: "Will a large order take longer?",
        answer: "Often, yes.\n\nA larger quantity may require more time than a smaller order.",
      },
      {
        question: "Should I place another order if the first one is delayed?",
        answer: "Usually, no.\n\nWait for the original order to finish or contact support first. Duplicate orders can make tracking more difficult.",
      },
      {
        question: "What should I do if my order has not started?",
        answer: "Check:\n\n• The estimated start time\n• Your submitted link\n• Whether the account is public\n• Whether the content still exists\n• Whether you followed the service instructions\n\nIf everything is correct and the expected time has passed, contact support.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Adding Funds",
    shortLabel: "Payments",
    subtitle: "Learn how TrendEvo payments and account balance work.",
    items: [
      {
        question: "Which payment methods does TrendEvo support?",
        answer: "TrendEvo supports convenient payment options for users in Bangladesh, including:\n\n• bKash\n• Nagad\n• Rocket\n\nOther payment options may also appear in the Add Funds section.",
      },
      {
        question: "Can I pay with bKash?",
        answer: "Yes, when bKash is available as an active payment option.\n\nFollow the payment instructions shown inside your account.",
      },
      {
        question: "Can I pay with Nagad?",
        answer: "Yes, if Nagad is currently available in the Add Funds section.",
      },
      {
        question: "Can I pay with Rocket?",
        answer: "Yes, when Rocket is listed as an available payment method.",
      },
      {
        question: "How do I add funds?",
        answer: "Log in, open the Add Funds section, choose your payment method, enter the amount, and complete the required payment steps.",
      },
      {
        question: "Is there a minimum deposit?",
        answer: "Minimum deposit requirements can vary depending on the payment method.\n\nCheck the Add Funds section for the current minimum amount.",
      },
      {
        question: "Is there a maximum deposit?",
        answer: "Some payment methods may have transaction limits.\n\nCheck the instructions for your selected payment option.",
      },
      {
        question: "How quickly is my balance added?",
        answer: "Processing time depends on the payment method.\n\nSome payments may update quickly, while others may require confirmation.",
      },
      {
        question: "What should I do if I paid but my balance did not update?",
        answer: "Contact support with:\n\n• Payment method\n• Payment amount\n• Transaction ID\n• Payment time\n• Screenshot or proof if needed",
      },
      {
        question: "Should I make another payment if my first deposit is delayed?",
        answer: "No.\n\nContact support first so the original transaction can be checked.",
      },
      {
        question: "What happens if I send the wrong payment amount?",
        answer: "Contact support and provide the full transaction details.\n\nResolution will depend on the payment method and available records.",
      },
      {
        question: "Can someone else make a payment for my TrendEvo account?",
        answer: "If the payment method allows it, this may be possible.\n\nMake sure you follow the exact payment instructions and keep the transaction details.",
      },
      {
        question: "Does TrendEvo charge extra payment fees?",
        answer: "Some payment methods or providers may apply processing charges.\n\nAny applicable cost should be checked before completing the payment.",
      },
      {
        question: "Can I transfer my TrendEvo balance to another account?",
        answer: "Balance transfers are not normally part of standard SMM ordering.\n\nContact support if you have a specific account-balance issue.",
      },
      {
        question: "Can I withdraw unused balance?",
        answer: "Deposited funds are generally intended for purchasing TrendEvo services.\n\nIf you have a special situation, review the lnk<Refund Policy|/refund-policy> or contact support.",
      },
      {
        question: "What currency is used on TrendEvo?",
        answer: "Check your dashboard and pricing section for the current currency used for service charges and deposits.",
      },
    ],
  },
  {
    id: "drops-refills",
    title: "Drops & Refills",
    shortLabel: "Drops & Refills",
    subtitle: "Learn what drops mean and when replacement may be available.",
    items: [
      {
        question: "What is a drop?",
        answer: "A drop happens when some previously delivered followers, likes, members, views, or other engagement later decreases.",
      },
      {
        question: "Why do social media numbers drop?",
        answer: "Drops can happen because platforms regularly:\n\n• Remove inactive accounts\n• Delete suspicious accounts\n• Update algorithms\n• Filter activity\n• Adjust public counters",
      },
      {
        question: "Does every TrendEvo service include refill?",
        answer: "No.\n\nSome services include refill coverage and others do not.",
      },
      {
        question: "How do I know if a service includes refill?",
        answer: "Check the service name and description before ordering.\n\nIf refill is included, the refill period or related conditions should normally be stated there.",
      },
      {
        question: "What does No Refill mean?",
        answer: "No Refill means dropped quantities are not covered for replacement after delivery.",
      },
      {
        question: "What is a refill period?",
        answer: "The refill period is the length of time during which an eligible order may receive replacement for qualifying drops.",
      },
      {
        question: "How do I request a refill?",
        answer: "Open your order history and check whether a refill option is available.\n\nIf necessary, contact support with the Order ID.",
      },
      {
        question: "Is a refill automatic?",
        answer: "It depends on the service.\n\nSome services may process refills automatically, while others may require a request.",
      },
      {
        question: "How long does a refill take?",
        answer: "Refill speed varies depending on the service and current platform conditions.",
      },
      {
        question: "Can I request a refill after the refill period ends?",
        answer: "Normally, no.\n\nRequests made outside the stated refill period may no longer qualify.",
      },
      {
        question: "Why was my refill request rejected?",
        answer: "Possible reasons include:\n\n• No-refill service\n• Refill period expired\n• Account became private\n• Link changed\n• Username changed\n• Another order affected the count\n• The detected drop did not meet refill conditions",
      },
      {
        question: "Can I request multiple refills?",
        answer: "If the service terms allow it and the order remains inside the refill period, additional eligible refill requests may sometimes be possible.",
      },
      {
        question: "What happens if a refill cannot be completed?",
        answer: "Contact support for a review.\n\nThe available resolution depends on the service conditions.",
      },
      {
        question: "Will all followers or likes stay forever?",
        answer: "No provider can guarantee permanent retention because social platforms continuously remove accounts and change their systems.\n\nIf retention matters, select a service with refill protection.",
      },
    ],
  },
  {
    id: "account-security",
    title: "Account, Privacy & Security",
    shortLabel: "Account & Security",
    subtitle: "Important answers about keeping your accounts protected.",
    items: [
      {
        question: "Do I need to share my social media password?",
        answer: "No.\n\nStandard TrendEvo orders normally require only the public link needed for the service.",
      },
      {
        question: "Will TrendEvo ask for my OTP?",
        answer: "No legitimate standard order should require you to provide a personal OTP, password, recovery code, or payment PIN.",
      },
      {
        question: "What information is normally required for an order?",
        answer: "Depending on the service, TrendEvo may need a public:\n\n• Profile URL\n• Post URL\n• Video URL\n• Page URL\n• Channel URL\n• Username\n• Track URL",
      },
      {
        question: "Should my social media account be public?",
        answer: "For most services, yes.\n\nThe system must be able to access the target profile or content.",
      },
      {
        question: "Can I make my account private after the order finishes?",
        answer: "Usually, yes.\n\nWait until the order and any required verification are complete.",
      },
      {
        question: "Is TrendEvo safe to use?",
        answer: "TrendEvo provides an account-based ordering system and standard services generally do not require social media passwords.\n\nCustomers should still read service instructions carefully and understand the rules of the social platforms they use.",
      },
      {
        question: "Can using an SMM service affect my social media account?",
        answer: "Social media platforms have their own policies regarding paid or artificial engagement.\n\nUsers should understand those policies and use SMM services responsibly.",
      },
      {
        question: "What information should I never share with anyone?",
        answer: "Never share:\n\n• Social media passwords\n• Email passwords\n• OTP codes\n• Recovery codes\n• Two-factor authentication codes\n• Payment PINs\n• Card PINs\n• Crypto wallet seed phrases",
      },
      {
        question: "How can I protect my TrendEvo account?",
        answer: "Use a strong and unique password and avoid sharing your login information.",
      },
      {
        question: "What should I do if I forget my TrendEvo password?",
        answer: "Use the password recovery option on the login page.\n\nFollow the instructions linked to your registered account information.",
      },
      {
        question: "Can I have more than one TrendEvo account?",
        answer: "If you need multiple accounts for a business reason, check TrendEvo's lnk<Terms of Service|/terms-of-service> or contact support first.",
      },
      {
        question: "Can I change my account email?",
        answer: "Account information changes may require verification.\n\nContact support if the dashboard does not provide a direct option.",
      },
      {
        question: "Does TrendEvo store my social media password?",
        answer: "Standard public-link SMM orders do not require TrendEvo to collect your social media password.\n\nSee the lnk<Privacy Policy|/privacy-policy> for more details about collected information.",
      },
    ],
  },
  {
    id: "services-results",
    title: "Services & Results",
    shortLabel: "Services & Results",
    subtitle: "Understand what different SMM services can and cannot do.",
    items: [
      {
        question: "Are all TrendEvo services the same quality?",
        answer: "No.\n\nServices can differ by speed, retention, price, source, refill coverage, location, and other factors.",
      },
      {
        question: "Why are there multiple services for the same platform?",
        answer: "Different customers have different priorities.\n\nOne service may focus on affordability, another on speed, another on refill coverage, and another on a particular country or audience type.",
      },
      {
        question: "Should I always choose the cheapest service?",
        answer: "Not necessarily.\n\nCompare price with quality, refill conditions, estimated delivery time, and your campaign goal.",
      },
      {
        question: "What is the difference between cheap and premium services?",
        answer: "The difference can include delivery speed, retention, source quality, refill protection, limits, targeting, and other service conditions.",
      },
      {
        question: "Can TrendEvo guarantee sales?",
        answer: "No.\n\nFollowers, views, likes, or other engagement do not automatically turn into sales.",
      },
      {
        question: "Can TrendEvo guarantee organic followers?",
        answer: "Only order a service based on exactly what its description promises.\n\nDo not assume a service delivers organic customers unless that is specifically stated.",
      },
      {
        question: "Will purchased followers engage with future posts?",
        answer: "Not necessarily.\n\nA followers service should not be treated as a guarantee of future likes, comments, purchases, or long-term engagement.",
      },
      {
        question: "Can views help my content look more active?",
        answer: "Views can increase the visible view count of eligible content, but long-term performance still depends on content quality, audience interest, and the platform's recommendation system.",
      },
      {
        question: "Can I use TrendEvo for a new social media account?",
        answer: "Yes.\n\nStart carefully, use reasonable quantities, and continue publishing real content.",
      },
      {
        question: "Can I use TrendEvo for an established account?",
        answer: "Yes.\n\nChoose services that fit the size and normal activity level of the account.",
      },
      {
        question: "Does TrendEvo replace organic marketing?",
        answer: "No.\n\nSMM services work best as one part of a broader strategy that includes content creation, community building, branding, SEO, advertising, and audience engagement.",
      },
      {
        question: "Can TrendEvo make my content go viral?",
        answer: "No SMM panel can guarantee virality.\n\nVirality depends on content quality, timing, audience response, retention, shares, platform algorithms, and many other factors.",
      },
      {
        question: "Can I guarantee monetization using SMM services?",
        answer: "No.\n\nMonetization platforms have their own eligibility and quality requirements. Meeting visible numbers alone does not guarantee approval.",
      },
      {
        question: "Can I order country-targeted services?",
        answer: "Some services may offer geographic targeting.\n\nCheck the service list and description for current country-specific options.",
      },
      {
        question: "Does delivery speed affect service quality?",
        answer: "Not always.\n\nFaster is not automatically better. Choose a service based on your actual goal rather than speed alone.",
      },
    ],
  },
  {
    id: "resellers-agencies",
    title: "Agencies, Freelancers & Resellers",
    shortLabel: "Resellers & Agencies",
    subtitle: "Questions for users who manage orders for clients.",
    items: [
      {
        question: "Can I use TrendEvo for client projects?",
        answer: "Yes.\n\nFreelancers, marketers, agencies, and resellers can manage multiple client orders through their account.",
      },
      {
        question: "Can I become an SMM reseller with TrendEvo?",
        answer: "Yes.\n\nYou can use TrendEvo services as part of your own social media service business, subject to TrendEvo's terms.",
      },
      {
        question: "Can agencies place bulk orders?",
        answer: "Yes.\n\nTrendEvo can be used for multiple campaigns and client accounts.",
      },
      {
        question: "Can I manage multiple clients from one account?",
        answer: "Yes.\n\nKeep each client's links and Order IDs organized to avoid mistakes.",
      },
      {
        question: "Can I place many orders at the same time?",
        answer: "Yes, provided your account has enough balance and the selected services support the requested quantities.",
      },
      {
        question: "Does TrendEvo offer API access?",
        answer: "TrendEvo may provide API functionality for users who want to automate order management.\n\nCheck the current dashboard or contact support for API availability and documentation.",
      },
      {
        question: "What is an SMM API?",
        answer: "An SMM API allows a reseller's website or software to communicate with an SMM panel automatically.\n\nIt can help automate order placement, status checks, and other reseller operations.",
      },
      {
        question: "Who should use the TrendEvo API?",
        answer: "API access is most useful for:\n\n• SMM resellers\n• Agencies\n• Developers\n• High-volume buyers\n• Businesses operating their own order platforms",
      },
      {
        question: "Do beginners need an API?",
        answer: "No.\n\nMost users can place orders directly through the TrendEvo dashboard.",
      },
      {
        question: "Can I resell TrendEvo services at my own price?",
        answer: "Resellers normally decide how they package and price services for their own customers, subject to their own business responsibilities and TrendEvo's terms.",
      },
      {
        question: "Can I use TrendEvo for white-label services?",
        answer: "Contact TrendEvo support to check whether white-label or reseller-specific solutions are currently available.",
      },
      {
        question: "Can I track client orders separately?",
        answer: "Each order has its own Order ID, which makes it easier to manage multiple client campaigns.",
      },
      {
        question: "Should I tell my clients about delivery times?",
        answer: "Yes.\n\nUse realistic expectations based on the service description rather than promising instant or guaranteed completion.",
      },
      {
        question: "What should agencies do before placing large orders?",
        answer: "Start with smaller test orders when using an unfamiliar service.\n\nCheck quality, speed, retention, and support before scaling.",
      },
    ],
  },
  {
    id: "support-policies",
    title: "Support & Policies",
    shortLabel: "Support & Policies",
    subtitle: "Get help when something does not work as expected.",
    items: [
      {
        question: "How can I contact TrendEvo support?",
        answer: "Use the lnk<Contact Us|/contact-us> page or the support options available inside your TrendEvo account.",
      },
      {
        question: "What should I include in a support request?",
        answer: "For order issues, include:\n\n• Order ID\n• Service\n• Target link\n• Current status\n• Description of the problem\n• Relevant screenshot if necessary",
      },
      {
        question: "Do I need to send my password to support?",
        answer: "No.\n\nNever send your social media password, payment PIN, OTP, recovery code, or similar sensitive information.",
      },
      {
        question: "How quickly does support reply?",
        answer: "Response times can vary depending on request volume and the complexity of the issue.\n\nProvide complete information in your first message to reduce delays.",
      },
      {
        question: "What issues can TrendEvo support help with?",
        answer: "Support can assist with matters such as:\n\n• Delayed orders\n• Failed payments\n• Refill requests\n• Partial orders\n• Service questions\n• Account issues\n• Order status clarification\n• API questions",
      },
      {
        question: "Does TrendEvo offer refunds?",
        answer: "Refund eligibility depends on the order and the applicable policy.\n\nReview the lnk<Refund Policy|/refund-policy> for complete conditions.",
      },
      {
        question: "What happens if an order cannot be delivered?",
        answer: "Depending on the service and situation, an undelivered order or quantity may qualify for cancellation, balance adjustment, partial handling, or another resolution.",
      },
      {
        question: "Will I receive a cash refund for every failed order?",
        answer: "Not necessarily.\n\nThe refund method and eligibility depend on TrendEvo's lnk<Refund Policy|/refund-policy> and the circumstances of the order.",
      },
      {
        question: "Are wrong-link orders refundable?",
        answer: "Orders submitted to an incorrect link may not qualify once processing has begun.\n\nAlways double-check links before submitting.",
      },
      {
        question: "Are completed orders refundable?",
        answer: "Generally, successfully completed services are not treated the same as undelivered orders.\n\nCheck the lnk<Refund Policy|/refund-policy> for exact conditions.",
      },
      {
        question: "What should I do if I disagree with an order result?",
        answer: "Contact support with your Order ID and explain the issue clearly.\n\nThe team can review the order against the service description and delivery records.",
      },
      {
        question: "Where can I find TrendEvo's lnk<Terms of Service|/terms-of-service>?",
        answer: "Visit the lnk<Terms of Service|/terms-of-service> page for rules regarding account use, ordering, payments, customer responsibilities, and service conditions.",
      },
      {
        question: "Where can I read the lnk<Privacy Policy|/privacy-policy>?",
        answer: "The lnk<Privacy Policy|/privacy-policy> explains how personal and account-related information is collected, used, and protected.",
      },
      {
        question: "Where can I read the lnk<Refund Policy|/refund-policy>?",
        answer: "The lnk<Refund Policy|/refund-policy> explains when orders, deposits, partial deliveries, or other situations may qualify for a refund or account adjustment.",
      },
      {
        question: "Should I read the policies before ordering?",
        answer: "Yes.\n\nUnderstanding the lnk<Terms of Service|/terms-of-service>, lnk<Privacy Policy|/privacy-policy>, lnk<Refund Policy|/refund-policy>, and individual service descriptions can prevent common problems.",
      },
    ],
  },
];
