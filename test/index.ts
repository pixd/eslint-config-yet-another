function noop<T extends any = any>(a: T): T {
  return a;
}

typescriptEslint_namingConvention: {
  varsNaming: {
    {
      const price = 0;
      noop(price);

      const Price = 0;
      noop(Price);

      const PRICE = 0;
      noop(PRICE);

      const salePrice = 0;
      noop(salePrice);

      const SalePrice = 0;
      noop(SalePrice);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const sale_price = 0;
      noop(sale_price);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const Sale_Price = 0;
      noop(Sale_Price);

      const SALE_PRICE = 0;
      noop(SALE_PRICE);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const priceVIP = 0;
      noop(priceVIP);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const PriceVIP = 0;
      noop(PriceVIP);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const price_VIP = 0;
      noop(price_VIP);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const Price_VIP = 0;
      noop(Price_VIP);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const _price = 0;
      noop(_price);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const price_ = 0;
      noop(price_);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const _price_ = 0;
      noop(_price_);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const __price = 0;
      noop(__price);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const price__ = 0;
      noop(price__);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const __price__ = 0;
      noop(__price__);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const $price = 0;
      noop($price);
    }
  }

  unusedVars: {
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const price = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const Price = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const PRICE = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const salePrice = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const SalePrice = 0;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const SALE_PRICE = 0;
    }
  }

  parametersNaming: {
    {
      ((price: number) => {
        return price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((Price: number) => {
        return Price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((PRICE: number) => {
        return PRICE;
      })(0);

      ((salePrice: number) => {
        return salePrice;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((SalePrice: number) => {
        return SalePrice;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((sale_price: number) => {
        return sale_price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((Sale_Price: number) => {
        return Sale_Price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((SALE_PRICE: number) => {
        return SALE_PRICE;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((priceVIP: number) => {
        return priceVIP;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((PriceVIP: number) => {
        return PriceVIP;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((price_VIP: number) => {
        return price_VIP;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((Price_VIP: number) => {
        return Price_VIP;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((_price: number) => {
        return _price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((price_: number) => {
        return price_;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((_price_: number) => {
        return _price_;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((__price: number) => {
        return __price;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((price__: number) => {
        return price__;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      ((__price__: number) => {
        return __price__;
      })(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      (($price: number) => {
        return $price;
      })(0);
    }
  }

  unusedParams: {
    {
      ((_price: number) => {
        return 0;
      })(0);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ((price: number) => {
        return 0;
      })(0);

      ((_salePrice: number) => {
        return 0;
      })(0);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ((salePrice: number) => {
        return 0;
      })(0);

      ((_price: number, name: string) => {
        return name;
      })(0, '');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ((price: number, name: string) => {
        return name;
      })(0, '');

      ((_salePrice: number, name: string) => {
        return name;
      })(0, '');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ((salePrice: number, name: string) => {
        return name;
      })(0, '');
    }
  }

  typesNaming: {
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type price = number;
      noop<price>(0);

      type Price = number;
      noop<Price>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type PRICE = number;
      noop<PRICE>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type salePrice = number;
      noop<salePrice>(0);

      type SalePrice = number;
      noop<SalePrice>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type sale_price = number;
      noop<sale_price>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Sale_Price = number;
      noop<Sale_Price>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type SALE_PRICE = number;
      noop<SALE_PRICE>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type priceVIP = number;
      noop<priceVIP>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type PriceVIP = number;
      noop<PriceVIP>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type price_VIP = number;
      noop<price_VIP>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Price_VIP = number;
      noop<Price_VIP>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type _price = number;
      noop<_price>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type price_ = number;
      noop<price_>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type _price_ = number;
      noop<_price_>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type __price = number;
      noop<__price>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type price__ = number;
      noop<price__>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type __price__ = number;
      noop<__price__>(0);

      // eslint-disable-next-line @typescript-eslint/naming-convention
      type $price = number;
      noop<$price>(0);
    }
  }

  unusedTypes: {
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type Price = string;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type SalePrice = string;
    }
  }

  typeParametersNaming: {
    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<price extends number = number> = price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Price extends number = number> = Price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<PRICE extends number = number> = PRICE;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<salePrice extends number = number> = salePrice;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<SalePrice extends number = number> = SalePrice;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<sale_price extends number = number> = sale_price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Sale_Price extends number = number> = Sale_Price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<SALE_PRICE extends number = number> = SALE_PRICE;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<priceVIP extends number = number> = priceVIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<PriceVIP extends number = number> = PriceVIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<price_VIP extends number = number> = price_VIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Price_VIP extends number = number> = Price_VIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<_price extends number = number> = _price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<price_ extends number = number> = price_;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<_price_ extends number = number> = _price_;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<__price extends number = number> = __price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<price__ extends number = number> = price__;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<__price__ extends number = number> = __price__;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<$price extends number = number> = $price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tprice extends number = number> = Tprice;
      noop<Type>(0);
    }

    {
      type Type<TPrice extends number = number> = TPrice;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TPRICE extends number = number> = TPRICE;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TsalePrice extends number = number> = TsalePrice;
      noop<Type>(0);
    }

    {
      type Type<TSalePrice extends number = number> = TSalePrice;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tsale_price extends number = number> = Tsale_price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TSale_Price extends number = number> = TSale_Price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TSALE_PRICE extends number = number> = TSALE_PRICE;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TpriceVIP extends number = number> = TpriceVIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TPriceVIP extends number = number> = TPriceVIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tprice_VIP extends number = number> = Tprice_VIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<TPrice_VIP extends number = number> = TPrice_VIP;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<T_price extends number = number> = T_price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tprice_ extends number = number> = Tprice_;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tprice__ extends number = number> = Tprice__;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<T__price extends number = number> = T__price;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<Tprice__ extends number = number> = Tprice__;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<T__price__ extends number = number> = T__price__;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type Type<T$price extends number = number> = T$price;
      noop<Type>(0);
    }
  }

  unusedTypeParameters: {
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type Type<TPrice extends number = number> = number;
      noop<Type>(0);
    }

    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type Type<TSalePrice extends number = number> = number;
      noop<Type>(0);
    }
  }

  membersNaming: {
    {
      const product = {
        price: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Price: 100,
        PRICE: 100,
        salePrice: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        SalePrice: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        sale_price: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Sale_Price: 100,
        SALE_PRICE: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        priceVIP: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        PriceVIP: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        price_VIP: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Price_VIP: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _price: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        price_: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        _price_: 100,
        __price: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        price__: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __price__: 100,
        $price: 100,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        $$price: 100,
        $: 100,
        Data__TypeRef: null,
      };

      noop(product);
    }

    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      class Product {
        public price = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public Price = 100;
        public PRICE = 100;
        public salePrice = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public SalePrice = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public sale_price = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public Sale_Price = 100;
        public SALE_PRICE = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public priceVIP = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public PriceVIP = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public price_VIP = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public Price_VIP = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public _price = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public price_ = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public _price_ = 100;
        public __price = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public price__ = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public __price__ = 100;
        public $price = 100;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public $$price = 100;
        public $ = 100;
        public Data__TypeRef = null;
      }
    }
  }
}

typescriptEslint_braceStyle: {
  {
    const trueOrFalse = Math.random() >= 0.5;
    if (trueOrFalse) {
      noop(0);
    }
    else {
      noop(0);
    }
  }
}

typescriptEslint_preferNullishCoalescing: {
  {
    type A = object | null;

    ((a: A, b: A) => {
      noop(a ?? b);
    })(null, null);

    ((a: A, b: A) => {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      noop(a || b);
    })(null, null);

    ((a: A, b: A) => {
      noop(a ?? (b && true));
    })(null, null);

    ((a: A, b: A, c: A) => {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      noop(a || (b && c));
    })(null, null, null);

    ((a: A, b: A) => {
      if (a || b) {
        return 1;
      }
      return 0;
    })(null, null);

    ((a: A, b: A) => {
      if (a ?? b) {
        return 1;
      }
      return 0;
    })(null, null);

    ((a: A, b: A, c: A) => {
      if (a || (b && c)) {
        return 1;
      }
      return 0;
    })(null, null, null);

    ((a: A, b: A, c: A) => {
      if (a ?? (b && c)) {
        return 1;
      }
      return 0;
    })(null, null, null);
  }

  {
    type A = string | null;

    ((a: A, b: A) => {
      noop(a ?? b);
    })(null, null);

    ((a: A, b: A) => {
      noop(a || b);
    })(null, null);

    ((a: A, b: A) => {
      noop(a ?? (b && true));
    })(null, null);

    ((a: A, b: A, c: A) => {
      noop(a || (b && c));
    })(null, null, null);

    ((a: A, b: A) => {
      if (a || b) {
        return 1;
      }
      return 0;
    })(null, null);

    ((a: A, b: A) => {
      if (a ?? b) {
        return 1;
      }
      return 0;
    })(null, null);

    ((a: A, b: A, c: A) => {
      if (a || (b && c)) {
        return 1;
      }
      return 0;
    })(null, null, null);

    ((a: A, b: A, c: A) => {
      if (a ?? (b && c)) {
        return 1;
      }
      return 0;
    })(null, null, null);
  }
}

typescriptEslint_memberDelimiterStyle: {
  {
    type Type = {
      a: string;
      b: string;
    };

    noop<Type>({} as Type);
  }

  {
    type Type = {
      // eslint-disable-next-line @typescript-eslint/member-delimiter-style
      a: string
      // eslint-disable-next-line @typescript-eslint/member-delimiter-style
      b: string
    };

    noop<Type>({} as Type);
  }
}
