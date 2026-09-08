import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import AccentListSection from '@/app/(legal)/_components/accent-list-section';
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
} from '@/app/(legal)/_components/primitives';
import StepperSection, {
  type StepperStep,
} from '@/app/(legal)/_components/stepper-section';
import { cn } from '@/lib/utils';
import { getStats } from '@/lib/stats';

const positiveItems = [
  {
    title: 'Your Order Was Never Delivered',
    description: (
      <>
        <p>
          If you placed a paid order and the service never started delivering
          within the expected timeframe stated in the package description, and
          our support team was unable to resolve the issue or restart the order,
          you are eligible for a full refund of the amount paid for that order.
        </p>
        <p>
          Expected delivery times vary by service and are stated in each
          package&apos;s description. If your order is still showing as pending
          beyond that window, contact our support team before requesting a
          refund so we can investigate and attempt to resolve it first.
        </p>
      </>
    ),
  },
  {
    title: 'Your Order Was Partially Delivered and Cannot Be Completed',
    description: (
      <>
        <p>
          If your order started delivering but stopped before the full quantity
          was reached and our team cannot complete the remaining delivery, you
          are eligible for a partial refund proportional to the undelivered
          portion of your order.
        </p>
        <p>
          For example, if you ordered 1,000 followers and only 600 were
          delivered before the order stalled permanently, you would be eligible
          for a refund equivalent to the cost of the 400 undelivered followers.
        </p>
      </>
    ),
  },
  {
    title: 'You Were Charged Incorrectly',
    description: (
      <p>
        If a technical error on our platform resulted in an incorrect charge to
        your account balance, such as being charged twice for one order or being
        charged a higher amount than the displayed price, we will correct the
        error immediately and restore your account balance to the accurate
        amount.
      </p>
    ),
  },
  {
    title: 'The Service Was Fundamentally Different from What Was Described',
    description: (
      <p>
        If the service you received was materially different from what the
        package description stated, such as receiving a completely different
        type of service from what you ordered, contact our support team with
        details. We will review the case and issue a refund or credit if the
        discrepancy is confirmed.
      </p>
    ),
  },
];

const negativeItems = [
  {
    title: 'Completed Orders Where Full Delivery Was Made',
    description: (
      <p>
        If your order was delivered in full according to the quantity and
        service type specified, a refund is not available simply because you
        changed your mind or are not satisfied with the results. SMM services
        deliver a specific quantity of a specific interaction. If that quantity
        was delivered as described, the order has been fulfilled.
      </p>
    ),
  },
  {
    title: 'Drop in Counts After Delivery Is Completed',
    description: (
      <>
        <p>
          Social media platforms including Facebook, Instagram, TikTok, and
          YouTube periodically clean their systems and remove accounts they
          identify as inactive or in violation of their policies. This is a
          platform-side action that affects all accounts, not just those that
          use SMM services. If your follower, like, or view count drops after a
          completed order due to platform cleanup, this is not grounds for a
          refund.
        </p>
        <p>
          This is specifically why we offer refill guarantee packages. If you
          purchased a package that includes a refill guarantee and your count
          drops within the stated refill window, request a top-up through your
          dashboard rather than a refund. That is exactly what the refill
          guarantee is designed for.
        </p>
      </>
    ),
  },
  {
    title: 'Orders Placed with the Wrong Link or Username',
    description: (
      <p>
        If you entered an incorrect profile link, video URL, or username when
        placing your order and the service was delivered to the wrong account or
        content, a refund is not available. Please double-check your link or
        username carefully before confirming any order. Once an order enters the
        delivery queue, the target cannot be changed.
      </p>
    ),
  },
  {
    title: 'Orders on Private or Restricted Accounts',
    description: (
      <p>
        If your account was set to private, restricted, or had its content
        removed at the time of or during delivery, and the service could not be
        delivered as a result, a refund is not available. All our services
        require the target account or content to be publicly accessible
        throughout the delivery period. Please ensure your account is set to
        public before placing any order.
      </p>
    ),
  },
  {
    title: 'Account Balance Added via Payment Methods',
    description: (
      <p>
        Funds added to your SMMSun account balance through bKash, Nagad, Rocket,
        Visa, Mastercard, or any other payment method are non-refundable as cash
        once deposited. Your balance remains in your account and can be used for
        any current or future services on SMMSun. If you have an unused balance
        and a genuine reason for requesting a withdrawal, contact our support
        team and we will review your case individually.
      </p>
    ),
  },
  {
    title: 'Orders Cancelled by the User After Delivery Has Started',
    description: (
      <p>
        If you request a cancellation after your order has already entered the
        delivery queue and service has begun, a refund is not available for the
        portion already delivered. If the order has not yet started, contact
        support immediately and we will attempt to cancel it before delivery
        begins.
      </p>
    ),
  },
];

const refundSteps: StepperStep[] = [
  {
    icon: '/images/icons/refund-policy-check-your-order-status-icon.svg',
    title: 'Check Your Order Status',
    description: (
      <p>
        Log in to your SMMSun account and go to My Orders. Check the current
        status of your order. If it shows as completed but the service was not
        delivered, take a screenshot of both the order status and the relevant
        social media account showing the unchanged count.
      </p>
    ),
  },
  {
    icon: '/images/icons/refund-policy-contact-our-support-team-icon.svg',
    title: 'Contact Our Support Team',
    description: (
      <>
        <p>
          Reach out to our support team via WhatsApp or through the{' '}
          <Link href="/contact-us" className={legalLinkClassName}>
            Contact Us
          </Link>{' '}
          page. Include the following information in your message so we can
          process your request as quickly as possible.
        </p>
        <p>
          Your SMMSun registered email address, your order ID (found in My
          Orders), the service you ordered, the issue you experienced, and any
          screenshots that support your request.
        </p>
      </>
    ),
  },
  {
    icon: '/images/icons/refund-policy-allow-time-for-review-icon.svg',
    title: 'Allow Time for Review',
    description: (
      <p>
        Our team will review your request within 24 to 72 hours of receiving it.
        We may ask for additional information if needed. If your refund request
        is approved, the amount will be credited to your SMMSun account balance.
        We do not process refunds back to the original payment method such as
        bKash or Nagad due to the nature of digital wallet transactions, but
        your account credit can be used for any future order on the platform.
      </p>
    ),
  },
  {
    icon: '/images/icons/refund-policy-use-your-credit-icon.svg',
    title: 'Use Your Credit',
    description: (
      <p>
        Once your account is credited, the balance is available immediately for
        any service on SMMSun. There is no expiry on account credits.
      </p>
    ),
  },
];

export default async function ContentSection() {
  const { usersAll } = await getStats();

  return (
    <PrimarySection className={legalSectionClassName}>
      <div className="container flex flex-col gap-9">
        <h2 className={cn('grid max-w-[762px]', legalPageHeadingClassName)}>
          <span>Refund Policy — What You Need to </span>
          <span className="text-gradient">Know Before You Order</span>
        </h2>

        <p className={legalIntroTextClassName}>
          We know that handing over money to any online platform requires trust.
          Especially for first-time users who have never used an SMM panel
          before, the refund policy is often the last thing you check before
          deciding whether to place that first order. So we are going to be
          completely straight with you here. This page explains exactly when
          SMMSun offers refunds, when we do not, and what you should do if
          something goes wrong with your order. No confusing legal language. No
          hidden clauses designed to avoid paying you back. Just a clear, honest
          explanation of how we handle money when things do not go as planned.
        </p>

        <PrimaryCard
          className={cn(
            legalNoticeCardClassName,
            'justify-center px-8 py-7 lg:px-10',
          )}
        >
          <p className={legalSmallTextClassName}>
            If you have questions about anything on this page, our support team
            is available 24/7 via WhatsApp and email. You can also visit our{' '}
            <Link href="/contact-us" className={legalLinkClassName}>
              Contact Us
            </Link>{' '}
            page to reach us directly.
          </p>
        </PrimaryCard>

        <PrimaryCard className={cn(cardClassName, 'gap-4')}>
          <h2 className={legalHeadingLgClassName}>
            The Nature of SMM Services and Why Refunds Work Differently
          </h2>
          <div className={cn('space-y-4', legalBodyTextClassName)}>
            <p>
              Before we get into specifics, it helps to understand something
              fundamental about how SMM panel services work. This context
              matters for understanding why our refund policy is structured the
              way it is.
            </p>
            <p>
              When you place an order on SMMSun, whether for followers, likes,
              views, or any other service, the delivery process begins almost
              immediately. In most cases, your order enters the queue within
              seconds of being placed and starts delivering within minutes. This
              is fundamentally different from buying a physical product that
              sits in a warehouse waiting to be shipped.
            </p>
            <p>
              Because delivery begins so quickly and the service is digital and
              non-reversible by nature, we cannot simply &quot;cancel&quot; a
              delivered order the way you might return a pair of shoes to a
              shop. Once followers have been delivered to an account or views
              have been registered on a video, those interactions have already
              occurred. They cannot be taken back.
            </p>
            <p>
              This is not unique to SMMSun. It is how every legitimate SMM panel
              in the world operates. We explain it here because we believe you
              deserve to understand the nature of what you are purchasing before
              you spend your money, not after.
            </p>
            <p>
              With that context in mind, here is exactly how our refund policy
              works.
            </p>
          </div>
        </PrimaryCard>

        <AccentListSection
          title="When You Are Eligible for a Refund"
          subtitle="SMMSun will process a refund or account credit in the following situations."
          items={positiveItems}
          variant="positive"
        />

        <AccentListSection
          title="When Refunds Do Not Apply"
          subtitle="We want to be equally clear about the situations where refunds are not available. Reading this section carefully before placing your order will help you avoid misunderstandings later."
          items={negativeItems}
          variant="negative"
        />

        <div className="flex flex-col gap-3">
          <h2 className={legalHeadingLgClassName}>
            Refill Guarantees — How They Work
          </h2>
          <div className={cn('space-y-4', legalBodyTextClassName)}>
            <p>
              Many packages on SMMSun come with a refill guarantee. This is
              separate from a refund and is an important feature to understand
              before choosing a package. <br /> <br /> A refill guarantee means
              that if your follower count, like count, or view count drops
              within a specified number of days after delivery is completed, you
              can request a free top-up to restore the count to the original
              delivered quantity. The refill period varies by package and is
              stated clearly in each package&apos;s description. <br /> <br />
              To request a refill, go to My Orders in your SMMSun dashboard,
              find the relevant order, and use the refill request option. Our
              team processes refill requests as quickly as possible, usually
              within 24 to 48 hours. <br /> <br /> Refill guarantees do not
              apply indefinitely. They apply only within the stated refill
              window from the date of delivery completion. After that window
              expires, the guarantee is no longer active for that order. <br />{' '}
              <br />
              If you are placing an order for an important account or campaign,
              we strongly recommend choosing a package with a refill guarantee.
              They cost slightly more but provide significantly better peace of
              mind.
            </p>
          </div>
        </div>

        <StepperSection
          title="How to Request a Refund"
          subtitle="If you believe your order qualifies for a refund based on the conditions described above, here is how to request one."
          steps={refundSteps}
        />

        <div className="flex flex-col gap-3">
          <h2 className={legalHeadingLgClassName}>
            Our Promise on Dispute Resolution
          </h2>
          <div className={cn('space-y-4', legalBodyTextClassName)}>
            <p>
              We handle every refund request as a real conversation, not a
              ticket to be closed. If you feel your case was not reviewed
              fairly, you can escalate it by replying to your original support
              conversation and asking for a senior review. We take customer
              satisfaction seriously because SMMSun&apos;s reputation in
              Bangladesh depends entirely on whether {usersAll.toLocaleString('en-US')} users trust us with
              their money.
            </p>
            <p>
              If a dispute cannot be resolved through our support process, it is
              subject to the laws and jurisdiction of Bangladesh. Please refer
              to our{' '}
              <Link
                href="/terms-of-service"
                className={legalLinkClassName}
              >
                Terms of Service
              </Link>{' '}
              for full details on dispute resolution.
            </p>
            <p>
              We are not a faceless global platform. We are a Bangladesh-based
              service that our users can contact directly, any time, in Bangla
              or English. That accountability is something we take seriously.
            </p>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
