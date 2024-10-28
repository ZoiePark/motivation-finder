import { useState } from 'react';

export default function MotivationTypeFinder() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({
    selfReflector: 0,
    aestheticImmerser: 0,
    creativeSeeker: 0,
    culturalIdentity: 0
  });
  
  const questions = [
    {
      text: "What do you value most when viewing artworks?",
      options: [
        { text: "Finding personal meaning and connections in artworks", type: "selfReflector" },
        { text: "Appreciating visual elements and aesthetic qualities", type: "aestheticImmerser" },
        { text: "Discovering new and creative artistic expressions", type: "creativeSeeker" },
        { text: "Understanding cultural and historical contexts", type: "culturalIdentity" }
      ]
    },
    {
      text: "What thoughts typically occupy your mind during art viewing?",
      options: [
        { text: "What does this artwork mean to me personally?", type: "selfReflector" },
        { text: "How do composition and technique create harmony?", type: "aestheticImmerser" },
        { text: "How can these expressions be applied creatively?", type: "creativeSeeker" },
        { text: "What cultural background does this work represent?", type: "culturalIdentity" }
      ]
    },
    {
      text: "What interests you most in an exhibition?",
      options: [
        { text: "Internal dialogue with the artwork", type: "selfReflector" },
        { text: "Formal beauty of the works", type: "aestheticImmerser" },
        { text: "Original artistic approaches", type: "creativeSeeker" },
        { text: "Various cultural perspectives", type: "culturalIdentity" }
      ]
    }
  ];

  const typeDescriptions = {
    selfReflector: {
      title: "Self-Reflector",
      description: "You prefer to find personal meaning through art and engage in internal dialogue. You value discovering connections between artworks and your own experiences or emotions.",
      viewingTips: "Take time to connect the artwork with your personal experiences and explore its individual meaning to you.",
      additionalInfo: {
        viewingFocus: [
          "Emotional resonance with the artwork",
          "Personal memories or experiences triggered",
          "Individual interpretation of symbols",
          "Reflection on personal growth"
        ],
        suggestedApproach: [
          "Spend time with works that emotionally resonate",
          "Journal your thoughts and feelings",
          "Compare different works' personal impact",
          "Consider how the artwork changes your perspective"
        ],
        keyConsiderations: [
          "What memories does this artwork evoke?",
          "How does this piece relate to my life experience?",
          "What personal meaning can I derive?",
          "How does this artwork change my perspective?"
        ]
      }
    },
    aestheticImmerser: {
      title: "Aesthetic Immerser",
      description: "You deeply engage with the visual and aesthetic elements of artworks. You prefer to carefully observe formal elements, colors, and composition.",
      viewingTips: "Focus on observing the formal elements and their harmonious relationships within the artwork.",
      additionalInfo: {
        viewingFocus: [
          "Compositional structure",
          "Color relationships",
          "Texture and material qualities",
          "Visual rhythm and balance"
        ],
        suggestedApproach: [
          "Analyze formal elements systematically",
          "Observe color interactions",
          "Study technique and execution",
          "Examine spatial relationships"
        ],
        keyConsiderations: [
          "How do the visual elements interact?",
          "What technical choices create impact?",
          "How does composition guide viewing?",
          "What role does color play?"
        ]
      }
    },
    creativeSeeker: {
      title: "Creative Seeker",
      description: "You look for artistic inspiration and creative ideas. You're particularly interested in innovative approaches and techniques.",
      viewingTips: "Pay attention to unique artistic expressions and techniques, exploring their creative potential.",
      additionalInfo: {
        viewingFocus: [
          "Innovative techniques",
          "Creative problem-solving",
          "Experimental approaches",
          "Artistic inspiration"
        ],
        suggestedApproach: [
          "Study unique artistic solutions",
          "Analyze creative processes",
          "Consider alternative approaches",
          "Look for innovative techniques"
        ],
        keyConsiderations: [
          "What makes this approach innovative?",
          "How can this inspire new ideas?",
          "What creative risks were taken?",
          "How does this challenge conventions?"
        ]
      }
    },
    culturalIdentity: {
      title: "Cultural Identity Seeker",
      description: "You value understanding cultural contexts and historical significance in art. You're deeply interested in various cultural perspectives.",
      viewingTips: "Consider the cultural and historical context while viewing, and interpret from various cultural perspectives.",
      additionalInfo: {
        viewingFocus: [
          "Cultural context and symbolism",
          "Historical significance",
          "Social implications",
          "Cultural exchange elements"
        ],
        suggestedApproach: [
          "Research historical background",
          "Consider cultural symbolism",
          "Examine social context",
          "Compare cultural perspectives"
        ],
        keyConsiderations: [
          "What cultural context shaped this work?",
          "How does it reflect its time period?",
          "What cultural symbols are present?",
          "How does it relate to cultural identity?"
        ]
      }
    }
  };

  const handleAnswer = (type) => {
    setScores(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setStep(prev => prev + 1);
  };

  const getResult = () => {
    let maxScore = 0;
    let result = 'selfReflector';
    
    Object.entries(scores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        result = type;
      }
    });
    
    return result;
  };

  if (step >= questions.length) {
    const result = getResult();
    const typeInfo = typeDescriptions[result];
    
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">{typeInfo.title}</h2>
        <div className="mb-6">
          <p className="text-gray-700 mb-4">{typeInfo.description}</p>
          
          <div className="bg-blue-50 p-4 rounded mb-4">
            <h3 className="font-semibold mb-2 text-blue-800">Viewing Tips</h3>
            <p className="text-blue-700">{typeInfo.viewingTips}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Viewing Focus</h3>
              <ul className="list-disc pl-5 space-y-1">
                {typeInfo.additionalInfo.viewingFocus.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Suggested Approach</h3>
              <ul className="list-disc pl-5 space-y-1">
                {typeInfo.additionalInfo.suggestedApproach.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Key Questions to Consider</h3>
              <ul className="list-disc pl-5 space-y-1">
                {typeInfo.additionalInfo.keyConsiderations.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button 
          onClick={() => {
            setStep(0);
            setScores({
              selfReflector: 0,
              aestheticImmerser: 0,
              creativeSeeker: 0,
              culturalIdentity: 0
            });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
            style={{width: `${(step / questions.length) * 100}%`}}
          ></div>
        </div>
        <h2 className="text-xl font-semibold mb-4">{questions[step].text}</h2>
      </div>
      <div className="space-y-3">
        {questions[step].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.type)}
            className="w-full p-4 text-left border rounded hover:bg-blue-50 transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}