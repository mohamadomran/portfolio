import Image from 'next/image';
import Link from 'next/link';

import awsCCPBadge from '@/public/static/images/aws-certified-cloud-practitioner-badge.png';

export const Certificate = () => {
  return (
    <>
      <h2 className="mb-8 mt-8 text-3xl ">Certifications</h2>
      <Link href="https://www.credly.com/badges/62b0dd07-a75e-400f-a2ea-f42243f42c90/public_url">
        <Image
          src={awsCCPBadge}
          width="140"
          height="140"
          alt="AWS Certified Cloud Practitioner"
          className="mt-8"
        />
      </Link>
    </>
  );
};
