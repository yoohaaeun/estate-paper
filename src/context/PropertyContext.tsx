import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface Property {
  price: string;
  type: number;
  apt: number;
  desc: string;
  area: string;
  customApt: string;
  customSupplyArea: string;
  customPrivateArea: string;
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
    type: 0,
    apt: 0,
    desc: '매물정보',
    area: '25',
    customApt: '',
    customSupplyArea: '',
    customPrivateArea: '',
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
