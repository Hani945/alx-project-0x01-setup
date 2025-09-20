import { UserData, UserModalProps } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "", username: "", email: "", phone: "", website: "",
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
    company: { name: "", catchPhrase: "", bs: "" }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name.startsWith("address.")){
      const key = name.split(".")[1];
      setUser(prev => ({ ...prev, address: { ...prev.address, [key]: value } }));
    } else if(name.startsWith("company.")){
      const key = name.split(".")[1];
      setUser(prev => ({ ...prev, company: { ...prev.company, [key]: value } }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p
