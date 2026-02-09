import { useState } from "react";
import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface Position {
  ticker: string;
  company: string;
  type: "Equity" | "ETF" | "REIT" | "Cash";
  category: "Core" | "Active" | "Fixed Income" | "Cash";
  sector?: string;
}

// Core Portfolio
const corePortfolio: Position[] = [
  { ticker: "GOOGL", company: "Alphabet", type: "Equity", category: "Core", sector: "Technology" },
  { ticker: "AAPL", company: "Apple", type: "Equity", category: "Core", sector: "Technology" },
  { ticker: "BA", company: "Boeing", type: "Equity", category: "Core", sector: "Industrials" },
  { ticker: "COST", company: "Costco", type: "Equity", category: "Core", sector: "Consumer" },
  { ticker: "GE", company: "GE Aerospace", type: "Equity", category: "Core", sector: "Industrials" },
  { ticker: "JNJ", company: "Johnson & Johnson", type: "Equity", category: "Core", sector: "Healthcare" },
  { ticker: "MSFT", company: "Microsoft", type: "Equity", category: "Core", sector: "Technology" },
  { ticker: "NEE", company: "NextEra Energy", type: "Equity", category: "Core", sector: "Utilities" },
  { ticker: "PCAR", company: "PACCAR Inc.", type: "Equity", category: "Core", sector: "Industrials" },
  { ticker: "PG", company: "Proctor & Gamble", type: "Equity", category: "Core", sector: "Consumer" },
  { ticker: "UNP", company: "Union Pacific", type: "Equity", category: "Core", sector: "Industrials" },
  { ticker: "VZ", company: "Verizon", type: "Equity", category: "Core", sector: "Telecom" },
  { ticker: "WMT", company: "Walmart", type: "Equity", category: "Core", sector: "Consumer" },
  { ticker: "DIS", company: "Walt Disney Co.", type: "Equity", category: "Core", sector: "Consumer" },
  { ticker: "WFC", company: "Wells Fargo", type: "Equity", category: "Core", sector: "Financials" },
];

// Active Portfolio
const activePortfolio: Position[] = [
  { ticker: "AXP", company: "American Express", type: "Equity", category: "Active", sector: "Financials" },
  { ticker: "T", company: "AT&T", type: "Equity", category: "Active", sector: "Telecom" },
  { ticker: "CAH", company: "Cardinal Health", type: "Equity", category: "Active", sector: "Healthcare" },
  { ticker: "SCHW", company: "Charles Schwab", type: "Equity", category: "Active", sector: "Financials" },
  { ticker: "CHKP", company: "Check Point Software", type: "Equity", category: "Active", sector: "Technology" },
  { ticker: "CSCO", company: "Cisco", type: "Equity", category: "Active", sector: "Technology" },
  { ticker: "DHR", company: "Danaher Corporation", type: "Equity", category: "Active", sector: "Healthcare" },
  { ticker: "EPD", company: "Enterprise Product Partners", type: "Equity", category: "Active", sector: "Energy" },
  { ticker: "EQR", company: "Equity Residential", type: "REIT", category: "Active", sector: "Real Estate" },
  { ticker: "IHI", company: "iShares U.S. Medical Devices ETF", type: "ETF", category: "Active", sector: "Healthcare" },
  { ticker: "KHC", company: "Kraft-Heinz Company", type: "Equity", category: "Active", sector: "Consumer" },
  { ticker: "PYPL", company: "Paypal", type: "Equity", category: "Active", sector: "Technology" },
  { ticker: "QCOM", company: "Qualcomm", type: "Equity", category: "Active", sector: "Technology" },
  { ticker: "VLTO", company: "Veralto", type: "Equity", category: "Active", sector: "Industrials" },
  { ticker: "VRT", company: "Vertiv", type: "Equity", category: "Active", sector: "Technology" },
  { ticker: "WY", company: "Weyerhaeuser", type: "REIT", category: "Active", sector: "Real Estate" },
];

// Fixed Income
const fixedIncome: Position[] = [
  { ticker: "IEF", company: "iShares 7-10 Year Treasury Bond ETF", type: "ETF", category: "Fixed Income" },
  { ticker: "SUSC", company: "iShares ESG USD Corp. Bond ETF", type: "ETF", category: "Fixed Income" },
  { ticker: "BGRN", company: "iShares Global Green Bond ETF", type: "ETF", category: "Fixed Income" },
];

// Cash & Cash Equivalents
const cashEquivalents: Position[] = [
  { ticker: "CASH", company: "Cash & Money Market", type: "Cash", category: "Cash" },
];

const allPositions = [...corePortfolio, ...activePortfolio, ...fixedIncome, ...cashEquivalents];

const categories = [
  "All",
  "Core",
  "Active",
  "Fixed Income",
  "Cash"
];

const sectors = [
  "All",
  "Technology",
  "Healthcare",
  "Consumer",
  "Industrials",
  "Financials",
  "Energy",
  "Utilities",
  "Telecom",
  "Real Estate"
];

const typeColors = {
  Equity: "outline",
  ETF: "secondary", 
  REIT: "outline",
  Cash: "destructive"
} as const;

const categoryColors = {
  Core: "default",
  Active: "secondary",
  "Fixed Income": "outline",
  Cash: "destructive"
} as const;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPositions = allPositions.filter(position => {
    const matchesCategory = selectedCategory === "All" || position.category === selectedCategory;
    const matchesSector = selectedSector === "All" || position.sector === selectedSector;
    const matchesSearch = 
      position.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSector && matchesSearch;
  });

  const getCategoryPositions = (category: string) => {
    switch (category) {
      case "Core":
        return corePortfolio;
      case "Active":
        return activePortfolio;
      case "Fixed Income":
        return fixedIncome;
      case "Cash":
        return cashEquivalents;
      default:
        return [];
    }
  };

  const renderCategorySection = (categoryName: string, positions: Position[]) => {
    const filtered = positions.filter(position => {
      const matchesSector = selectedSector === "All" || position.sector === selectedSector;
      const matchesSearch = 
        position.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        position.company.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSector && matchesSearch;
    });

    if (filtered.length === 0 && searchQuery) return null;

    return (
      <div key={categoryName} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{categoryName} Portfolio</h2>
            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? 'position' : 'positions'}
            </p>
          </div>
          <Badge variant={categoryColors[categoryName as keyof typeof categoryColors] || "outline"} className="text-sm px-4 py-2">
            Total Value: <span className="font-semibold">Calculated</span>
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((position, index) => (
            <Card key={index} className="border-border/50 glass">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">{position.ticker}</CardTitle>
                    <p className="text-sm text-black font-medium mt-1">
                      {position.company}
                    </p>
                  </div>
                  <Badge variant={typeColors[position.type]} className="ml-2">
                    {position.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Category
                    </p>
                    <p className="text-sm text-black font-medium">
                      {position.category}
                    </p>
                  </div>
                  {position.sector && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Sector
                      </p>
                      <p className="text-sm text-black font-medium">
                        {position.sector}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="mb-6 !text-white">Portfolio</h1>
          <p className="text-xl leading-relaxed font-medium !text-white">
            Our current holdings organized by portfolio category.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border/40">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Search */}
            <div className="max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search ticker or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Filter by Sector</h3>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <Button
                    key={sector}
                    variant={selectedSector === sector ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSector(sector)}
                    className="text-xs"
                  >
                    {sector}
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          {selectedCategory === "All" ? (
            <>
              {renderCategorySection("Core", corePortfolio)}
              {renderCategorySection("Active", activePortfolio)}
              {renderCategorySection("Fixed Income", fixedIncome)}
              {renderCategorySection("Cash & Cash Equivalents", cashEquivalents)}
            </>
          ) : (
            <>
              {renderCategorySection(
                selectedCategory === "Cash" ? "Cash & Cash Equivalents" : selectedCategory,
                getCategoryPositions(selectedCategory)
              )}
            </>
          )}

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No positions found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
