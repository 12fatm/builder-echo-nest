import { Button } from "./ui/button";

interface VenueCardProps {
  name: string;
  rating: number;
  location: string;
  size: string;
  capacity: number;
  price: number;
  currency: string;
  image: string;
}

export default function VenueCard({
  name,
  rating,
  location,
  size,
  capacity,
  price,
  currency,
  image,
}: VenueCardProps) {
  return (
    <div className="flex w-[475.5px] p-4 pt-4 pb-0 justify-between items-start rounded-2xl border border-[#F2F2F2] bg-[#FBFBFB] shadow-[0_8px_12px_0_rgba(0,0,0,0.06)]">
      <div className="flex flex-col items-start gap-4 flex-1">
        {/* Image */}
        <img 
          src={image} 
          alt={name}
          className="h-[200px] w-full rounded-lg object-cover"
        />
        
        {/* Details */}
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start gap-3 w-full">
            {/* Header */}
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#1A1A1A] font-sans text-xl font-bold leading-normal">
                {name}
              </h3>
              <div className="flex justify-end items-center gap-3">
                <div className="flex w-[70px] h-8 p-1 items-center gap-2 rounded-md border border-[#F4BD1F] bg-[#FCFCFC]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z" fill="#F4BD1F"/>
                  </svg>
                  <span className="text-[#292929] font-sans text-[18px] font-bold leading-6">
                    {rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex w-[396px] flex-col items-start gap-4 flex-1">
              {/* Location */}
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9999 11.1912C11.4358 11.1912 12.5999 10.0272 12.5999 8.59121C12.5999 7.15527 11.4358 5.99121 9.9999 5.99121C8.56396 5.99121 7.3999 7.15527 7.3999 8.59121C7.3999 10.0272 8.56396 11.1912 9.9999 11.1912Z" stroke="url(#paint0_linear_location)" strokeWidth="1.5"/>
                  <path d="M3.01675 7.07533C4.65842 -0.141339 15.3501 -0.133006 16.9834 7.08366C17.9417 11.317 15.3084 14.9003 13.0001 17.117C11.3251 18.7337 8.67508 18.7337 6.99175 17.117C4.69175 14.9003 2.05842 11.3087 3.01675 7.07533Z" stroke="url(#paint1_linear_location)" strokeWidth="1.5"/>
                  <defs>
                    <linearGradient id="paint0_linear_location" x1="9.9999" y1="5.99121" x2="9.9999" y2="11.1912" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_location" x1="10.0001" y1="1.66699" x2="10.0001" y2="18.3295" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-[#4D4D4D] font-sans text-base font-normal leading-6">
                  {location}
                </span>
              </div>

              {/* Size */}
              <div className="flex w-[149px] items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.6665 8.31699V7.50033C1.6665 3.33366 3.33317 1.66699 7.49984 1.66699H12.4998C16.6665 1.66699 18.3332 3.33366 18.3332 7.50033V12.5003C18.3332 16.667 16.6665 18.3337 12.4998 18.3337H11.6665" stroke="url(#paint0_linear_size)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8335 9.16673L15.0085 4.9834H11.6668" stroke="url(#paint1_linear_size)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.0083 4.9834V8.32506" stroke="url(#paint2_linear_size)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.1665 13.458V15.708C9.1665 17.583 8.4165 18.333 6.5415 18.333H4.2915C2.4165 18.333 1.6665 17.583 1.6665 15.708V13.458C1.6665 11.583 2.4165 10.833 4.2915 10.833H6.5415C8.4165 10.833 9.1665 11.583 9.1665 13.458Z" stroke="url(#paint3_linear_size)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_size" x1="9.99984" y1="1.66699" x2="9.99984" y2="18.3337" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_size" x1="12.921" y1="4.9834" x2="12.921" y2="9.16673" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_size" x1="15.5083" y1="4.9834" x2="15.5083" y2="8.32506" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_size" x1="5.4165" y1="10.833" x2="5.4165" y2="18.333" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-[#4D4D4D] font-sans text-base font-normal leading-6">
                  {size}
                </span>
              </div>

              {/* Attendees */}
              <div className="flex w-[109px] items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.63314 9.05866C7.5498 9.05033 7.4498 9.05033 7.35814 9.05866C5.3748 8.99199 3.7998 7.36699 3.7998 5.36699C3.7998 3.32533 5.4498 1.66699 7.4998 1.66699C9.54147 1.66699 11.1998 3.32533 11.1998 5.36699C11.1915 7.36699 9.61647 8.99199 7.63314 9.05866Z" stroke="url(#paint0_linear_users)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.6752 3.33301C15.2919 3.33301 16.5919 4.64134 16.5919 6.24967C16.5919 7.82468 15.3419 9.10801 13.7836 9.16634C13.7169 9.15801 13.6419 9.15801 13.5669 9.16634" stroke="url(#paint1_linear_users)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.4666 12.133C1.44993 13.483 1.44993 15.683 3.4666 17.0247C5.75827 18.558 9.5166 18.558 11.8083 17.0247C13.8249 15.6747 13.8249 13.4747 11.8083 12.133C9.52494 10.608 5.7666 10.608 3.4666 12.133Z" stroke="url(#paint2_linear_users)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.2832 16.667C15.8832 16.542 16.4499 16.3003 16.9165 15.942C18.2165 14.967 18.2165 13.3587 16.9165 12.3837C16.4582 12.0337 15.8999 11.8003 15.3082 11.667" stroke="url(#paint3_linear_users)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_users" x1="7.4998" y1="1.66699" x2="7.4998" y2="9.05866" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_users" x1="15.0794" y1="3.33301" x2="15.0794" y2="9.16634" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_users" x1="7.63743" y1="10.9893" x2="7.63743" y2="18.1747" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_users" x1="16.5874" y1="11.667" x2="16.5874" y2="16.667" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F1821F"/>
                      <stop offset="1" stopColor="#EF5A29"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-[#4D4D4D] font-sans text-base font-normal leading-6">
                  {capacity}
                </span>
              </div>
            </div>
          </div>

          {/* Action area */}
          <div className="flex py-3 px-0 justify-between items-center w-full border-t border-dashed border-[#BBB]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[#1A1A1A] font-sans text-2xl font-bold leading-normal tracking-[0.24px]">
                  {price}
                </span>
                <div className="flex w-6 h-6 p-2 justify-center items-center gap-2">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 14.6484C15.8943 15.5035 15.848 15.8745 15.4531 16.708L9.38965 17.96C9.52903 17.0591 9.71461 16.364 10.0166 15.9473L16 14.6484ZM7.55469 8.75195L9.36621 8.35938V2.63379C10.0413 1.87594 10.4566 1.53563 11.2715 1.10547V7.94531L16 6.91895C15.8943 7.7738 15.8478 8.14433 15.4531 8.97754L11.2715 9.86133V11.7852L16 10.7842C15.8943 11.6393 15.848 12.0102 15.4531 12.8438L11.2715 13.707V13.7246L9.36621 14.1182V10.2637L7.55469 10.6465V13.0762L7.52344 13.082C7.10672 13.8128 6.51827 14.6907 5.95117 15.3916L0 16.5254C0.0533615 15.7597 0.164479 15.3279 0.510742 14.5566L5.64941 13.4424V11.0498L0.886719 12.0576C0.940076 11.2919 1.05224 10.861 1.39844 10.0898L5.64941 9.16602V1.56836C6.32454 0.81051 6.73977 0.470197 7.55469 0.0400391V8.75195Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <span className="text-[#888] font-sans text-base font-normal leading-6">
                Person/Hour
              </span>
            </div>
            
            <div className="flex w-[124px] h-10 p-3 justify-center items-center gap-2 rounded-lg bg-[#5007C5]">
              <span className="text-[#FCFCFC] font-sans text-base font-bold leading-6">
                Details
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.00016 14.6663H10.0002C13.3335 14.6663 14.6668 13.333 14.6668 9.99967V5.99967C14.6668 2.66634 13.3335 1.33301 10.0002 1.33301H6.00016C2.66683 1.33301 1.3335 2.66634 1.3335 5.99967V9.99967C1.3335 13.333 2.66683 14.6663 6.00016 14.6663Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.16016 10.3532L9.50682 7.99982L7.16016 5.64648" fill="#1A1A1A"/>
                <path d="M7.16016 10.3532L9.50682 7.99982L7.16016 5.64648" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
