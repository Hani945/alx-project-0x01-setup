import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name} ({username})</h2>
      <p className="text-gray-600 mb-1">Email: {email}</p>
      <p className="text-gray-600 mb-1">Phone: {phone}</p>
      <p className="text-gray-600 mb-1">Website: {website}</p>
      <p className="text-gray-600">Company: {company.name}</p>
    </div>
  );
};

export default UserCard;
