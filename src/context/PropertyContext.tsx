import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface Property {
  price: string;
  type: string;
  apt: string;
  desc: string;
  area: string;
  supplyArea: string;
  exclusiveArea: string;
  custom: boolean;
  customApt: string;
  customSupplyArea: string;
  customExclusiveArea: string;
}

interface PropertyContextType {
  property: Property;
  setProperty: Dispatch<SetStateAction<Property>>;
}

interface PropertyProviderProps {
  children: React.ReactNode;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export const PropertyProvider: React.FC<PropertyProviderProps> = ({
  children,
}) => {
  const [property, setProperty] = useState<Property>({
    price: '금액',
    type: '매매',
    apt: '엑슬루타워',
    desc: '매물정보',
    area: '25',
    supplyArea: '85.02',
    exclusiveArea: '59.79',
    custom: false,
    customApt: '',
    customSupplyArea: '',
    customExclusiveArea: '',
  });

  return (
    <PropertyContext.Provider value={{ property, setProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};
