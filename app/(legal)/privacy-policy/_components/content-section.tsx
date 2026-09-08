import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import IconSectionCard from '@/app/(legal)/_components/icon-section-card';
import {
  cardClassName,
  legalBodyTextClassName,
  legalHeadingLgClassName,
  legalIntroTextClassName,
  legalLinkClassName,
  legalNoticeCardClassName,
  legalPageHeadingClassName,
  legalSectionClassName,
  legalSmallTextClassName,
  legalSubtitleClassName,
} from '@/app/(legal)/_components/primitives';
import { cn } from '@/lib/utils';
import { getStats } from '@/lib/stats';

export default async function ContentSection() {
  const { usersAll } = await getStats();

  return (
    <PrimarySection className={legalSectionClassName}>
      <div className="container flex flex-col gap-9">
        <p className={legalIntroTextClassName}>
          Your privacy matters to us. Not as a legal formality we are required to
          say, but as a practical commitment that shapes how we built SMMSun and
          how we operate it every day. This page explains exactly what personal
          information SMMSun collects when you use our platform, why we collect
          it, how we use it, who we share it with, and what rights you have over
          your own data. We have written it in plain language because we believe
          you deserve to actually understand this document, not just scroll past
          it. If you have questions about anything on this page, you can reach us
          any time through our{' '}
          <Link href="/contact-us" className={legalLinkClassName}>
            Contact Us
          </Link>{' '}
          page. Our support team responds in Bangla and English, 24 hours a day.
        </p>

        <PrimaryCard
          className={cn(
            legalNoticeCardClassName,
            'justify-center px-8 py-7 lg:px-10',
          )}
        >
          <p className={legalSmallTextClassName}>
            This Privacy Policy applies to all users of trendevo.com and should
            be read alongside our{' '}
            <Link
              href="/terms-of-service"
              className={legalLinkClassName}
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/refund-policy" className={legalLinkClassName}>
              Refund Policy
            </Link>
            .
          </p>
        </PrimaryCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-last-updated-icon.svg"
          title="Last Updated"
        >
          <p>
            This Privacy Policy was last updated in 2026. We will update this
            page whenever our data practices change in any meaningful way and
            will note the revision date at the top of this section. We encourage
            you to check this page periodically.
          </p>
        </IconSectionCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-who-we-are-icon.svg"
          title="Who We Are"
        >
          <p>
            SMMSun is a social media marketing panel based in Bangladesh,
            operating through smmsun.com. We provide social media growth
            services including followers, likes, views, comments, and related
            services across platforms including Facebook, Instagram, TikTok,
            YouTube, Telegram, and others. We have been operating since 2020
            and have served over {usersAll.toLocaleString('en-US')} registered users across Bangladesh and
            internationally. You can learn more about who we are and how our
            platform works on our About Us page. For any privacy-related
            questions or requests, you can contact us directly through our{' '}
            <Link href="/contact-us" className={legalLinkClassName}>
              Contact Us
            </Link>{' '}
            page or via WhatsApp as listed there.
          </p>
        </IconSectionCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-collect-info-icon.svg"
          title="What Information We Collect"
          intro="We only collect information that is genuinely necessary to provide our services, process your payments, and support your account. Here is a clear breakdown of what that includes."
          subsections={[
            {
              title: 'Information You Provide Directly',
              content: (
                <>
                  <p>
                    When you register for a SMMSun account, you provide us with
                    your email address and a password of your choosing. This is
                    the minimum information required to create and secure your
                    account.
                  </p>
                  <p>
                    When you place an order, you provide the public URL or
                    username of the social media account or content you want to
                    boost. We want to be very clear here: we collect the link or
                    username you enter into our order form. We do not collect,
                    store, or have any access to your social media login
                    credentials. We never ask for your Facebook, Instagram,
                    TikTok, YouTube, or any other platform password. If anyone
                    ever contacts you claiming to be from SMMSun and asks for a
                    social media password, it is not us.
                  </p>
                  <p>
                    When you contact our support team via WhatsApp or email, we
                    retain the content of that communication to help us resolve
                    your issue and improve our service.
                  </p>
                </>
              ),
            },
            {
              title: 'Payment Information',
              content: (
                <>
                  <p>
                    SMMSun does not store your full payment details on our
                    servers. When you add funds to your account using bKash,
                    Nagad, Rocket, Upay, Cellfin, Visa, Mastercard, Binance Pay,
                    or Payeer, the transaction is processed through each
                    respective payment provider&apos;s own secure system. We
                    receive confirmation of the transaction and the amount, but
                    we do not see or store your full mobile banking PIN, card
                    number, or wallet credentials.
                  </p>
                  <p>
                    We do retain a record of your transaction history on SMMSun
                    for accounting purposes and to help resolve any payment
                    disputes. This record includes the amount, date, payment
                    method type, and transaction reference number.
                  </p>
                </>
              ),
            },
          ]}
        />

        <IconSectionCard
          icon="/images/icons/privacy-policy-how-we-use-icon.svg"
          title="How We Use Your Information"
          intro="Every piece of information we collect is used for a specific, legitimate purpose. Here is exactly what we use your data for."
          subsections={[
            {
              title: 'To Create and Manage Your Account',
              content: (
                <p>
                  Your email address and password are used to create your
                  account, verify your identity when you log in, and communicate
                  with you about your account activity including order
                  confirmations, payment receipts, and support responses.
                </p>
              ),
            },
            {
              title: 'To Process and Deliver Your Orders',
              content: (
                <p>
                  The social media URL or username you provide when placing an
                  order is used solely to deliver the service you purchased. It
                  is passed to our service delivery system for that specific
                  order. We do not use your order links for any other purpose.
                </p>
              ),
            },
            {
              title: 'To Process Payments and Maintain Financial Records',
              content: (
                <p>
                  Transaction records are retained to process your payments,
                  maintain your account balance, issue refunds or credits where
                  applicable under our{' '}
                  <Link
                    href="/refund-policy"
                    className={legalLinkClassName}
                  >
                    Refund Policy
                  </Link>
                  , and resolve any billing disputes. We are required to retain
                  financial records for a reasonable period for accounting and
                  legal compliance purposes.
                </p>
              ),
            },
            {
              title: 'To Provide Customer Support',
              content: (
                <p>
                  When you contact our support team, we use the information you
                  share to understand and resolve your issue. We may refer back
                  to previous support conversations if they are relevant to a
                  new issue you raise.
                </p>
              ),
            },
            {
              title: 'To Improve Our Platform',
              content: (
                <p>
                  Automatically collected technical data and aggregated analytics
                  help us understand how our platform is being used, which
                  services are most popular, where users encounter problems, and
                  how we can improve the overall experience. This analysis is
                  done at an aggregated level and does not involve profiling
                  individual users.
                </p>
              ),
            },
            {
              title: 'To Keep Our Platform Secure',
              content: (
                <p>
                  IP addresses and technical logs are used to detect and prevent
                  fraudulent activity, unauthorised access attempts, and abuse of
                  our platform. If we detect activity that suggests a security
                  threat, we use this information to investigate and respond.
                </p>
              ),
            },
            {
              title: 'To Communicate Service Updates',
              content: (
                <p>
                  We may occasionally send you important information about
                  changes to our platform, updated policies, service
                  disruptions, or new features that are relevant to your use of
                  SMMSun. These are service communications, not marketing emails.
                  You cannot opt out of essential service communications while
                  you hold an active account.
                </p>
              ),
            },
          ]}
        />

        <IconSectionCard
          icon="/images/icons/privacy-policy-share-info-icon.svg"
          title="Who We Share Your Information With"
          intro="We do not sell your personal data. We do not share your personal data with advertisers. We do not trade your information with third parties for their own marketing purposes. Here is the limited set of situations where your data is shared with others."
          subsections={[
            {
              title: 'Payment Processors',
              content: (
                <p>
                  When you make a payment on SMMSun, your transaction is
                  processed through the relevant payment provider, such as
                  bKash, Nagad, Rocket, Visa, or Mastercard. Each provider
                  receives the information necessary to process your transaction
                  according to their own privacy policies and security standards.
                  SMMSun does not control how these providers handle data on
                  their end.
                </p>
              ),
            },
            {
              title: 'Service Delivery Partners',
              content: (
                <p>
                  SMMSun works with a network of service providers to deliver
                  the social media growth services you order. When you place an
                  order, the public URL or username you provided is shared with
                  the relevant delivery partner for fulfilment purposes only.
                  These partners do not receive your name, email address, or any
                  other personal account information.
                </p>
              ),
            },
            {
              title: 'Analytics and Platform Tools',
              content: (
                <p>
                  We use standard web analytics tools to understand traffic and
                  usage patterns on our site. These tools may collect anonymised,
                  aggregated data about site visits. They do not receive
                  personally identifiable information such as your name or email
                  address.
                </p>
              ),
            },
            {
              title: 'Legal Requirements',
              content: (
                <p>
                  If we are required by law, court order, or government authority
                  in Bangladesh to disclose certain information, we will comply
                  with that legal obligation. We will notify you of such a request
                  where we are legally permitted to do so.
                </p>
              ),
            },
            {
              title: 'Business Transfers',
              content: (
                <p>
                  In the event that SMMSun is acquired, merged with another
                  company, or undergoes a significant business restructure, your
                  data may be transferred to the new entity as part of that
                  process. We would notify you of any such change and ensure
                  that your data continues to be handled in accordance with this
                  Privacy Policy.
                </p>
              ),
            },
          ]}
        />

        <IconSectionCard
          icon="/images/icons/privacy-policy-data-security-icon.svg"
          title="Data Storage and Security"
        >
          <p>
            SMMSun takes the security of your personal data seriously. We
            implement appropriate technical and organisational measures to
            protect your information against unauthorised access, loss,
            alteration, or disclosure. Your account is protected by the password
            you create at registration. We strongly recommend using a strong,
            unique password for your SMMSun account and not reusing it across
            other platforms. We store passwords in encrypted form and never store
            them in plain text. Payment transactions are handled through each
            payment provider&apos;s own secure infrastructure. We do not store
            full payment credentials on our servers. Despite our security
            measures, no system connected to the internet is completely immune to
            risk. If you ever suspect that your SMMSun account has been accessed
            without your authorisation, contact our support team immediately
            through our{' '}
            <Link href="/contact-us" className={legalLinkClassName}>
              Contact Us
            </Link>{' '}
            page so we can investigate and help secure your account.
          </p>
        </IconSectionCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-data-retention-icon.svg"
          title="How Long We Keep Your Data"
        >
          <p>
            We retain your personal data only for as long as necessary to fulfil
            the purposes described in this policy. Your account data, including
            your email address and order history, is retained for as long as your
            account remains active. If you request account deletion, we will
            remove your personal data within a reasonable timeframe, subject to
            any legal or accounting obligations that require us to retain certain
            records. Transaction records are retained for a minimum period
            required by applicable financial and accounting regulations in
            Bangladesh. Support communications are retained for a reasonable
            period to help us resolve future issues and improve our service
            quality. Automatically collected technical data such as server logs
            is retained for a shorter period, typically 90 days, before being
            deleted or anonymised.
          </p>
        </IconSectionCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-your-rights-icon.svg"
          title="Your Rights Over Your Personal Data"
          intro="As a user of SMMSun, you have the following rights regarding your personal data."
          subsections={[
            {
              title: 'Right to Access',
              content: (
                <p>
                  You have the right to request a summary of the personal data
                  SMMSun holds about you. To make this request, contact us
                  through our{' '}
                  <Link href="/contact-us" className={legalLinkClassName}>
                    Contact Us
                  </Link>{' '}
                  page with your registered email address and we will respond
                  within a reasonable timeframe.
                </p>
              ),
            },
            {
              title: 'Right to Correction',
              content: (
                <p>
                  If any personal data we hold about you is inaccurate or
                  outdated, you have the right to request that we correct it.
                  You can update your email address directly from your account
                  settings. For other corrections, contact our support team.
                </p>
              ),
            },
            {
              title: 'Right to Deletion',
              content: (
                <p>
                  You have the right to request that we delete your personal data
                  and close your SMMSun account. We will process deletion
                  requests subject to any legal obligations that require us to
                  retain certain records, such as financial transaction history.
                  To request account deletion, contact us through our{' '}
                  <Link href="/contact-us" className={legalLinkClassName}>
                    Contact Us
                  </Link>{' '}
                  page.
                </p>
              ),
            },
            {
              title: 'Right to Withdraw Consent',
              content: (
                <p>
                  Where we process your data based on your consent, you have the
                  right to withdraw that consent at any time. Withdrawal of
                  consent does not affect the lawfulness of any processing that
                  occurred before the withdrawal.
                </p>
              ),
            },
            {
              title: 'Right to Complain',
              content: (
                <p>
                  If you believe we have handled your personal data in a way that
                  violates your rights, you have the right to raise a complaint.
                  We encourage you to contact us directly first so we can attempt
                  to resolve the issue. If you remain unsatisfied, you may
                  escalate the matter to the relevant authorities in Bangladesh
                  responsible for data protection and digital security.
                </p>
              ),
            },
          ]}
        />

        <IconSectionCard
          icon="/images/icons/privacy-policy-third-party-icon.svg"
          title="Third-Party Links"
        >
          <p>
            Our website may contain links to third-party websites and platforms,
            such as Facebook, Instagram, TikTok, YouTube, and payment providers.
            These links are provided for your convenience. SMMSun is not
            responsible for the privacy practices of any third-party website.
            When you leave smmsun.com and visit another site, that site&apos;s own
            privacy policy applies. We encourage you to read the privacy policies
            of any third-party services you use.
          </p>
        </IconSectionCard>

        <IconSectionCard
          icon="/images/icons/privacy-policy-changes-icon.svg"
          title="Changes to This Privacy Policy"
        >
          <p>
            We may update this Privacy Policy from time to time as our platform
            evolves, as new payment methods are added, or as legal requirements
            in Bangladesh change. When we make meaningful changes, we will update
            the date at the top of this page. For significant changes that
            materially affect how your data is handled, we will notify registered
            users via email. Your continued use of SMMSun after any update to
            this Privacy Policy constitutes your acceptance of the revised terms.
          </p>
        </IconSectionCard>
      </div>
    </PrimarySection>
  );
}
