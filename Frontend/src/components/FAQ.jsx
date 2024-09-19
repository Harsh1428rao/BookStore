import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I purchase books from this store?',
      answer: 'To purchase books, browse through our catalog, add items to your cart, and proceed to checkout to complete the payment process.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, net banking, and digital wallets like PayPal and Google Pay.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking link via email to monitor your delivery status.',
    },
    {
      question: 'Can I return or exchange a book?',
      answer: 'Yes, books can be returned or exchanged within 15 days of delivery. Please refer to our return policy for more details.',
    },
    {
      question: 'Is there a membership program for discounts?',
      answer: 'Yes, we offer a membership program that provides discounts on all purchases. Sign up to receive exclusive offers.',
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-2 px-4 bg-gray-100 rounded-lg shadow-md focus:outline-none"
            >
              <h3 className="text-lg font-semibold">
                {faq.question}
                <span className="float-right">{activeIndex === index ? '-' : '+'}</span>
              </h3>
            </button>
            {activeIndex === index && (
              <div className="faq-answer mt-2 p-4 bg-gray-50 border-l-4 border-blue-400 rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
