import React from "react";
import BaseCard from "../ui/BaseCard";

const AchievementCard = ({ title, provider, year }) => {
  // Map providers to icons
  const getIcon = (provider) => {
    const iconMap = {
      "HackerRank": "🏆",
      "TCS iON": "🎖️",
      "Microsoft": "🏅",
      "Cisco Networking Academy": "📜",
      "Google": "⭐",
    };
    return iconMap[provider] || "🎯";
  };

  return (
    <BaseCard className="p-6">
      <div className="flex items-start gap-3 mb-2">
        <span className="text-2xl mt-1">{getIcon(provider)}</span>
        <h4 className="text-white font-medium text-sm sm:text-base flex-1">
          {title}
        </h4>
      </div>

      <p className="text-blue-400 text-sm ml-10">
        {provider}
      </p>

      <span className="text-gray-500 text-xs mt-2 ml-10 block">
        {year}
      </span>
    </BaseCard>
  );
};

export default AchievementCard;
