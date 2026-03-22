export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel?: string; // e.g., "/mo" for rent
  beds: number;
  baths: number;
  area: number; // in square meters
  images: string[];
  tag?: {
    text: string;
    type: 'exclusive' | 'new' | 'sale' | 'rent';
  };
};

export const featuredProperties: Property[] = [
  {
    id: "f-1",
    title: "The Glass Pavilion",
    location: "Beverly Hills, California",
    price: 5250000,
    beds: 5,
    baths: 4.5,
    area: 4200,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "Exclusive", type: "exclusive" }
  },
  {
    id: "f-2",
    title: "Azure Heights Penthouse",
    location: "Downtown, Vancouver",
    price: 3800000,
    beds: 3,
    baths: 3,
    area: 2100,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "New Arrival", type: "new" }
  }
];

export const newProperties: Property[] = [
  {
    id: "n-1",
    title: "Modern Family Home",
    location: "123 Pine St, Seattle",
    price: 850000,
    beds: 3,
    baths: 2,
    area: 120,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-2",
    title: "Urban Loft",
    location: "456 Elm Ave, Portland",
    price: 3200,
    priceLabel: "/mo",
    beds: 1,
    baths: 1,
    area: 85,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-3",
    title: "Highland Retreat",
    location: "789 Mountain Rd, Bend",
    price: 620000,
    beds: 2,
    baths: 2,
    area: 98,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-4",
    title: "Sea View Penthouse",
    location: "321 Ocean Dr, Miami",
    price: 4500,
    priceLabel: "/mo",
    beds: 3,
    baths: 3,
    area: 180,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-5",
    title: "Central Studio",
    location: "555 Main St, Chicago",
    price: 550000,
    beds: 1,
    baths: 1,
    area: 50,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-6",
    title: "Garden Villa",
    location: "999 Oak Ln, Austin",
    price: 2800,
    priceLabel: "/mo",
    beds: 2,
    baths: 2,
    area: 110,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-7",
    title: "Downtown Skyline Condo",
    location: "101 High St, New York",
    price: 1250000,
    beds: 2,
    baths: 2,
    area: 115,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-8",
    title: "Desert Oasis Estate",
    location: "777 Sand Dunes Rd, Scottsdale",
    price: 2100000,
    beds: 4,
    baths: 3.5,
    area: 320,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-9",
    title: "Lakeside Cabin",
    location: "12 Timber Ln, Lake Tahoe",
    price: 4500,
    priceLabel: "/mo",
    beds: 3,
    baths: 2,
    area: 150,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-10",
    title: "Historic Townhouse",
    location: "55 King St, Boston",
    price: 1850000,
    beds: 3,
    baths: 2.5,
    area: 210,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-11",
    title: "Luxury High-Rise Apartment",
    location: "888 Skyline Blvd, San Francisco",
    price: 6000,
    priceLabel: "/mo",
    beds: 2,
    baths: 2,
    area: 130,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-12",
    title: "Suburban Family Cottage",
    location: "44 Meadow Brook, Nashville",
    price: 495000,
    beds: 4,
    baths: 2,
    area: 190,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-13",
    title: "Eco-Friendly Modern Home",
    location: "202 Green Way, Boulder",
    price: 920000,
    beds: 3,
    baths: 3,
    area: 200,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-14",
    title: "Riverside Loft",
    location: "70 Water St, Brooklyn",
    price: 3800,
    priceLabel: "/mo",
    beds: 1,
    baths: 1.5,
    area: 95,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  },
  {
    id: "n-15",
    title: "Mountain View Chalet",
    location: "800 Peak Rd, Aspen",
    price: 3250000,
    beds: 5,
    baths: 4,
    area: 450,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR SALE", type: "sale" }
  },
  {
    id: "n-16",
    title: "Sunset Beach House",
    location: "123 Shoreline Dr, Malibu",
    price: 8500,
    priceLabel: "/mo",
    beds: 3,
    baths: 2,
    area: 160,
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1600607687931-5701d6713ed0?auto=format&fit=crop&q=80"],
    tag: { text: "FOR RENT", type: "rent" }
  }
];
