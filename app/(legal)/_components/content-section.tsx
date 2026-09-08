import Image from 'next/image';
import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import {
  ContentBlock,
  ListItem,
  SectionBadge,
  cardClassName,
  legalBodyTextClassName,
  legalHeadingLgClassName,
  legalHeadingMdClassName,
  legalIntroTextClassName,
  legalLinkClassName,
  legalNoticeCardClassName,
  legalPageHeadingClassName,
  legalSectionClassName,
  legalSmallTextClassName,
  legalSubheadingClassName,
} from '@/app/(legal)/_components/primitives';
import { cn } from '@/lib/utils';

const youMayItems = [
  'Use SMMSun to grow the social media presence of accounts and content that you own or manage with the account owner\u2019s consent.',
  'Use SMMSun\u2019s API access to integrate our services into your own reseller panel, subject to API terms agreed separately.',
  'Use SMMSun for commercial purposes including managing services for clients as a digital marketing agency or freelancer.',
  'Contact our support team at any time with questions, complaints, or requests.',
];

const youMayNotItems = [
  'Use SMMSun to target accounts, content, or individuals in a way that constitutes harassment, abuse, or targeted harm.',
  'Use SMMSun to place orders on accounts you do not own or manage without the account owner\u2019s explicit consent.',
  'Attempt to reverse-engineer, scrape, or exploit our platform\u2019s technical systems in any unauthorised way.',
  'Use automated tools or bots to create multiple SMMSun accounts or to manipulate your account balance.',
  'Resell SMMSun services through our platform in a way that misrepresents their nature or makes fraudulent claims to end users.',
  'Provide false information during account registration or order placement.',
  'Use SMMSun in any way that violates the laws of Bangladesh or the terms of service of the social media platforms on which the services are delivered.',
  'SMMSun reserves the right to suspend or permanently terminate accounts found to be in violation of these acceptable use rules without prior notice and without refund of remaining balance in cases of serious or deliberate abuse.',
];

export default function TermsContentSection() {
  return (
    <PrimarySection className={legalSectionClassName}>
      <div className="container flex flex-col gap-9">
        <h2 className={cn('grid max-w-[762px]', legalPageHeadingClassName)}>
          <span>Terms of Service — Please Read</span>
          <span className="text-gradient">Before Using Trend Evo</span>
        </h2>
        <p className={legalIntroTextClassName}>
          Most Terms of Service pages are written by lawyers for other lawyers.
          They are long, confusing, and deliberately difficult to read. We have
          written ours differently. This page explains the rules and
          expectations that govern your use of SMMSun. It protects both you and
          us by making sure everyone is on the same page before any money
          changes hands or any order is placed. We have kept the language as
          plain and direct as possible while still covering everything that
          needs to be covered legally. Please read this before creating an
          account or placing your first order. If something is unclear, contact
          us through our{' '}
          <Link href="/contact-us" className={legalLinkClassName}>
            Contact Us
          </Link>{' '}
          page before you proceed. Our team is available 24 hours a day in
          Bangla and English and would rather answer a question upfront than
          deal with a misunderstanding later.
        </p>

        <PrimaryCard className={cn(legalNoticeCardClassName, 'justify-center')}>
          <p className={legalSmallTextClassName}>
            These Terms of Service apply to all users of smmsun.com and should
            be read alongside our{' '}
            <Link href="/privacy-policy" className={legalLinkClassName}>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/refund-policy" className={legalLinkClassName}>
              Refund Policy
            </Link>
            .
          </p>
        </PrimaryCard>

        <PrimaryCard className={cn(cardClassName, 'gap-4')}>
          <div className="flex items-center gap-3">
            <Image
              src="/images/icons/terms-last-updated-clock-icon.svg"
              alt="Last updated clock icon"
              width={24}
              height={24}
              className="size-6"
            />
            <h2 className={legalHeadingLgClassName}>
              Last Updated
            </h2>
          </div>
          <p className={legalBodyTextClassName}>
            These Terms of Service were last updated in 2026. We will update
            this page when our terms change in any meaningful way and will note
            the revision date here. Your continued use of SMMSun after any
            update constitutes acceptance of the revised terms.
          </p>
        </PrimaryCard>

        <ContentBlock number={1} title="Who We Are and What Trend evo Does">
          <p>
            SMMSun is a social media marketing panel operating through
            smmsun.com. We are based in Bangladesh and have been serving users
            since 2020. Our platform provides social media growth services
            including followers, likes, views, comments, shares, watch time, and
            related services across major platforms including Facebook,
            Instagram, TikTok, YouTube, Telegram, and X (formerly Twitter).
          </p>
          <p>
            We serve individual content creators, small and medium businesses,
            digital marketing agencies, freelancers, and resellers across
            Bangladesh and internationally. You can learn more about who we are
            on our About Us page.
          </p>
          <p>
            By creating an account and using SMMSun, you enter into a binding
            agreement with us under these Terms of Service.
          </p>
        </ContentBlock>

        <ContentBlock number={2} title="Eligibility — Who Can Use Trend Evo">
          <p>To use SMMSun, you must meet the following conditions.</p>
          <p>
            You must be at least 18 years of age. SMMSun is not intended for use
            by minors. If you are under 18, you are not permitted to create an
            account or place orders on our platform.
          </p>
          <p>
            You must be a human individual or a legitimately operating business.
            Automated account creation is not permitted. You must provide
            accurate information when registering. Creating an account with
            false information, including a fake email address, is a violation of
            these terms.
          </p>
          <p>
            You must have the legal authority to use the social media accounts
            and content you submit orders for. Placing orders on accounts that
            you do not own or manage, without the account owner&apos;s knowledge
            or consent, is a violation of these terms.
          </p>
          <p>
            If you are using SMMSun on behalf of a business or organisation, you
            represent that you have the authority to bind that entity to these
            terms.
          </p>
        </ContentBlock>

        <ContentBlock number={3} title="Account Registration and Security">
          <p>
            Creating an account on SMMSun is free. You will need to provide a
            valid email address and create a password to register.
          </p>
          <p>
            You are responsible for maintaining the security of your account.
            This means using a strong, unique password and not sharing your
            login credentials with anyone you do not trust. SMMSun will never
            ask you for your password. If anyone contacts you claiming to be
            from SMMSun and asks for your account password or any social media
            password, do not share it and report the contact to us immediately
            through our{' '}
            <Link href="/contact-us" className={legalLinkClassName}>
              Contact Us
            </Link>{' '}
            page.
          </p>
          <p>
            You are responsible for all activity that occurs under your account.
            If you believe your account has been accessed without your
            authorisation, contact our support team immediately so we can help
            secure it.
          </p>
          <p>
            SMMSun reserves the right to suspend or terminate accounts that show
            signs of fraudulent activity, abuse of our platform, or violation of
            these terms.
          </p>
        </ContentBlock>

        <ContentBlock
          number={4}
          title="Our Services — What We Offer and How They Work"
        >
          <p>
            SMMSun provides social media growth services delivered through our
            online panel at smmsun.com. Services are available for purchase by
            registered users who have added funds to their account balance.
          </p>
          <p>
            Each service listed on our platform includes a description of what
            is being delivered, the expected delivery timeframe, the price per
            unit, and where applicable, the refill guarantee period. Please read
            the service description carefully before placing any order.
          </p>
          <p>
            Services are delivered to the public URL or username you provide at
            the time of ordering. It is your responsibility to ensure that the
            link or username you enter is correct and that the target account or
            content is publicly accessible at the time of and throughout the
            delivery period.
          </p>
          <p>
            SMMSun acts as an intermediary between you and our service delivery
            network. We coordinate delivery on your behalf but do not guarantee
            specific outcomes beyond the quantity and service type stated in the
            package description. Social media platforms are independent third
            parties whose algorithms, policies, and technical systems are
            outside our control.
          </p>
        </ContentBlock>

        <ContentBlock number={5} title="Payments, Pricing, and Account Balance">
          <p>
            All prices on SMMSun are displayed in Bangladeshi Taka (BDT) unless
            otherwise stated. Prices are inclusive of all applicable fees from
            our side. There are no hidden charges added at checkout.
          </p>
          <p>
            To place an order, you must first add funds to your SMMSun account
            balance. We accept the following payment methods: bKash, Nagad,
            Rocket, Upay, Cellfin, Visa, Mastercard, Binance Pay, and Payeer.
            Payment methods may be updated from time to time and the current
            list is displayed on the Add Funds page of your dashboard.
          </p>
          <p>
            Funds added to your account balance are credited instantly upon
            confirmed payment. Your balance does not expire and can be used for
            any current or future service on SMMSun.
          </p>
          <p>
            Account balance funds are non-refundable as cash withdrawals. Once
            funds are added to your SMMSun balance, they can be used for
            services on our platform but cannot be transferred back to your
            bKash, Nagad, or other payment account. Please refer to our{' '}
            <Link href="/refund-policy" className={legalLinkClassName}>
              Refund Policy
            </Link>{' '}
            for full details on when account credits are issued.
          </p>
          <p>
            SMMSun reserves the right to adjust service pricing at any time.
            Price changes will be reflected on the services page and do not
            affect orders already placed and confirmed.
          </p>
        </ContentBlock>

        <PrimaryCard className={cn(cardClassName, 'gap-10')}>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <SectionBadge number={8} />
              <h2 className={legalHeadingMdClassName}>
                Acceptable Use — What You May and May Not Do
              </h2>
            </div>
            <p className={legalBodyTextClassName}>
              SMMSun is a legitimate business tool used by thousands of
              creators, businesses, and agencies across Bangladesh. To protect
              all users of our platform and to ensure the service remains
              operational and effective, we require all users to follow the
              acceptable use rules below.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#9deeb4] bg-[#f7fef9] p-8 dark:border-emerald-400/30 dark:bg-emerald-950/20">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#d1fae5]">
                  <Image
                    src="/images/icons/terms-acceptable-use-check-icon.svg"
                    alt="Allowed use checkmark icon"
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </span>
                <h3 className={legalSubheadingClassName}>
                  You May
                </h3>
              </div>
              <ul className="flex flex-col gap-6">
                {youMayItems.map((item) => (
                  <ListItem
                    key={item}
                    icon="/images/icons/terms-acceptable-use-check-icon.svg"
                    iconBg="bg-[#d1fae5]/60"
                  >
                    {item}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#ffd7d7] bg-[#fff9f9] p-8 dark:border-rose-400/30 dark:bg-rose-950/20">
              <div className="mb-8 flex items-center gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#ffe4e6]">
                  <Image
                    src="/images/icons/terms-acceptable-use-x-icon.svg"
                    alt="Prohibited use icon"
                    width={20}
                    height={20}
                    className="size-5"
                  />
                </span>
                <h3 className={legalSubheadingClassName}>
                  You May Not
                </h3>
              </div>
              <ul className="flex flex-col gap-6">
                {youMayNotItems.map((item) => (
                  <ListItem
                    key={item}
                    icon="/images/icons/terms-acceptable-use-x-icon.svg"
                    iconBg="bg-[#ffe4e6]/60"
                  >
                    {item}
                  </ListItem>
                ))}
              </ul>
            </div>
          </div>
        </PrimaryCard>

        <ContentBlock number={9} title="Third-Party Social Media Platforms">
          <p>
            SMMSun provides services that interact with third-party social media
            platforms including but not limited to Facebook, Instagram, TikTok,
            YouTube, Telegram, and X. These platforms are independent companies
            with their own terms of service, community guidelines, and technical
            systems.
          </p>
          <p>
            SMMSun is not affiliated with, endorsed by, or in any way officially
            connected to any of these platforms. We do not have any special
            relationship with Meta, ByteDance, Google, or any other platform
            operator.
          </p>
          <p>
            Social media platforms periodically update their algorithms,
            policies, and technical infrastructure in ways that can affect the
            delivery or retention of SMM services. These changes are outside
            SMMSun&apos;s control. We cannot guarantee that services which work
            effectively today will perform identically in the future if a
            platform makes a significant technical or policy change.
          </p>
          <p>
            By using SMMSun, you acknowledge that you are also subject to the
            terms of service of the social media platforms on which your ordered
            services are delivered. It is your responsibility to understand
            those terms and to use our services in a manner consistent with your
            own assessment of any platform-side risk.
          </p>
        </ContentBlock>

        <ContentBlock number={10} title="Limitation of Liability">
          <p>
            SMMSun provides social media growth services on an as-available
            basis. While we work hard to deliver every order accurately and on
            time, we cannot guarantee uninterrupted service or specific business
            outcomes resulting from our services.
          </p>
          <p>
            To the maximum extent permitted by applicable law in Bangladesh,
            SMMSun&apos;s total liability to any user for any claim arising from
            or related to their use of our platform is limited to the amount
            paid by that user for the specific order or service that is the
            subject of the claim.
          </p>
          <p>
            SMMSun is not liable for any indirect, incidental, consequential, or
            punitive damages arising from your use of our services, including
            but not limited to loss of business, loss of revenue, loss of data,
            or damage to your social media account&apos;s standing or
            algorithmic performance.
          </p>
          <p>
            SMMSun is not responsible for any action taken by a social media
            platform against your account, including account suspension, content
            removal, or reduction in organic reach, whether or not such action
            is related to your use of our services.
          </p>
        </ContentBlock>

        <ContentBlock number={11} title="Intellectual Property">
          <p>
            All content on smmsun.com, including our logo, platform design,
            written content, service descriptions, and technical systems, is the
            property of SMMSun and is protected by applicable intellectual
            property laws.
          </p>
          <p>
            You may not copy, reproduce, distribute, or create derivative works
            from any content on our platform without our prior written
            permission.
          </p>
          <p>
            By submitting content to SMMSun, such as support messages or
            feedback, you grant us a limited, non-exclusive right to use that
            content for the purpose of providing and improving our services.
          </p>
        </ContentBlock>

        <ContentBlock number={12} title="Privacy and Data Protection">
          <p>
            Your use of SMMSun is also governed by our{' '}
            <Link href="/privacy-policy" className={legalLinkClassName}>
              Privacy Policy
            </Link>
            , which explains in detail what personal data we collect, how we use
            it, who we share it with, and what rights you have over your own
            information.
          </p>
          <p>
            By creating an account and using SMMSun, you agree to our data
            practices as described in the Privacy Policy. We encourage you to
            read it in full before registering.
          </p>
        </ContentBlock>

        <ContentBlock number={13} title="Account Suspension and Termination">
          <p>
            SMMSun reserves the right to suspend or terminate any account at our
            discretion in the following circumstances. Violation of any section
            of these Terms of Service. Fraudulent activity including
            chargebacks, false payment claims, or account manipulation. Abusive
            behaviour toward our support team or other users. Inactivity for an
            extended period combined with a zero account balance. Any activity
            that we determine, in our reasonable judgment, poses a risk to our
            platform, our users, or our service delivery partners.
          </p>
          <p>
            If your account is suspended due to a suspected error or
            misunderstanding, contact our support team through the{' '}
            <Link
              href="/contact-us"
              className={cn(legalLinkClassName, 'underline hover:opacity-80')}
            >
              Contact Us
            </Link>{' '}
            page and we will review the situation. We aim to be fair in every
            case.
          </p>
          <p>
            If your account is terminated for a serious violation of these
            terms, any remaining account balance may be forfeited and will not
            be refunded.
          </p>
        </ContentBlock>

        <ContentBlock number={14} title="Account Suspension and Termination">
          <p>
            SMMSun may update these Terms of Service from time to time as our
            platform grows, as new services are added, or as legal requirements
            in Bangladesh evolve. When we make meaningful changes, we will
            update the date at the top of this page.
          </p>
          <p>
            For significant changes that materially affect your rights or
            obligations, we will notify registered users via email where
            possible. Your continued use of SMMSun after any update to these
            terms constitutes your acceptance of the revised terms.
          </p>
          <p>
            If you do not agree with an updated version of these terms, you
            should stop using SMMSun and contact our support team to close your
            account.
          </p>
        </ContentBlock>

        <ContentBlock number={15} title="Governing Law and Jurisdiction">
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of Bangladesh. Any dispute arising from or related to
            your use of SMMSun that cannot be resolved through our support
            process will be subject to the exclusive jurisdiction of the courts
            of Bangladesh.
          </p>
          <p>
            We always encourage users to contact us directly before escalating
            any dispute. The vast majority of issues are resolved quickly
            through our support team without any need for formal proceedings.
            You can reach us at any time through our{' '}
            <Link href="/contact-us" className={legalLinkClassName}>
              Contact Us
            </Link>{' '}
            page.
          </p>
        </ContentBlock>
      </div>
    </PrimarySection>
  );
}
