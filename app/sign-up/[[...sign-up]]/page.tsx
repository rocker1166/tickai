import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex flex-col items-center content-center my-5">
      <SignUp />
      {/* Add more items here */}
    </div>
  );
}