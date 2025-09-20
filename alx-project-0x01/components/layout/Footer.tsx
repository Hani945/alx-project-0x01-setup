const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
