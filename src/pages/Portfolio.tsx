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
  sector: string;
}

const positions: Position[] = [
  // Technology & IT
  { ticker: "AAPL", company: "APPLE INC", type: "Equity", sector: "Technology & IT" },
  { ticker: "CHKP", company: "CHECK POINT SOFTWARE T F", type: "Equity", sector: "Technology & IT" },
  { ticker: "CSCO", company: "CISCO SYS INC", type: "Equity", sector: "Technology & IT" },
  { ticker: "GOOGL", company: "ALPHABET INC CLASS A", type: "Equity", sector: "Technology & IT" },
  { ticker: "MSFT", company: "MICROSOFT CORP", type: "Equity", sector: "Technology & IT" },
  { ticker: "PYPL", company: "PAYPAL HLDGS INC", type: "Equity", sector: "Technology & IT" },
  { ticker: "QCOM", company: "QUALCOMM INC", type: "Equity", sector: "Technology & IT" },
  { ticker: "VRT", company: "VERTIV HLDGS CO CLASS A", type: "Equity", sector: "Technology & IT" },
  
  // Healthcare
  { ticker: "CAH", company: "CARDINAL HEALTH INC", type: "Equity", sector: "Healthcare" },
  { ticker: "DHR", company: "DANAHER CORP", type: "Equity", sector: "Healthcare" },
  { ticker: "JNJ", company: "JOHNSON & JOHNSON", type: "Equity", sector: "Healthcare" },
  { ticker: "UNH", company: "UNITEDHEALTH GROUP INC", type: "Equity", sector: "Healthcare" },
  { ticker: "IHI", company: "ISHARES US MEDICAL DEVICES ETF", type: "ETF", sector: "Healthcare" },
  
  // Consumer
  { ticker: "COST", company: "COSTCO WHSL CORP NEW", type: "Equity", sector: "Consumer" },
  { ticker: "DIS", company: "DISNEY WALT CO", type: "Equity", sector: "Consumer" },
  { ticker: "KHC", company: "KRAFT HEINZ CO", type: "Equity", sector: "Consumer" },
  { ticker: "PG", company: "PROCTER & GAMBLE CO", type: "Equity", sector: "Consumer" },
  { ticker: "WMT", company: "WALMART INC", type: "Equity", sector: "Consumer" },
  
  // Industrials & Transportation
  { ticker: "GE", company: "GE AEROSPACE", type: "Equity", sector: "Industrials & Transportation" },
  { ticker: "PCAR", company: "PACCAR INC", type: "Equity", sector: "Industrials & Transportation" },
  { ticker: "UNP", company: "UNION PAC CORP", type: "Equity", sector: "Industrials & Transportation" },
  { ticker: "VLTO", company: "VERALTO CORP", type: "Equity", sector: "Industrials & Transportation" },
  
  // Energy & Utilities / ESG
  { ticker: "NEE", company: "NEXTERA ENERGY INC", type: "Equity", sector: "Energy & Utilities" },
  { ticker: "EPD", company: "ENTERPRISE PRODS PART LP", type: "Equity", sector: "Energy & Utilities" },
  { ticker: "BGRN", company: "ISHARES USD GREEN BOND ETF", type: "ETF", sector: "Energy & Utilities" },
  { ticker: "SUSC", company: "ISHARES TRU ESG AWR USD CORP BND ETF", type: "ETF", sector: "Energy & Utilities" },
  
  // Telecom
  { ticker: "T", company: "AT&T INC", type: "Equity", sector: "Telecom" },
  { ticker: "VZ", company: "VERIZON COMMUNICATIONS I", type: "Equity", sector: "Telecom" },
  
  // Financials
  { ticker: "WFC", company: "WELLS FARGO & CO", type: "Equity", sector: "Financials" },
  
  // Real Estate
  { ticker: "EQR", company: "EQUITY RESIDENTIAL REIT", type: "REIT", sector: "Real Estate" },
  { ticker: "WY", company: "WEYERHAEUSER CO REIT", type: "REIT", sector: "Real Estate" },
  
  // Fixed Income
  { ticker: "IEF", company: "ISHARES 7–10 YEAR TREASURY BOND ETF", type: "ETF", sector: "Fixed Income" },
  
  // Cash
  { ticker: "CASH", company: "Cash & Cash Investments", type: "Cash", sector: "Cash & Cash Investments" },
];

const sectors = [
  "All",
  "Technology & IT",
  "Healthcare", 
  "Consumer",
  "Industrials & Transportation",
  "Energy & Utilities",
  "Telecom",
  "Financials",
  "Real Estate",
  "Fixed Income",
  "Cash & Cash Investments"
];

const typeColors = {
  Equity: "default",
  ETF: "secondary", 
  REIT: "outline",
  Cash: "destructive"
} as const;

export default function Portfolio() {
  const [selectedSector, setSelectedSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPositions = positions.filter(position => {
    const matchesSector = selectedSector === "All" || position.sector === selectedSector;
    const matchesSearch = 
      position.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSector && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Portfolio</h1>
          <p className="text-xl text-black leading-relaxed font-medium">
            Our current active positions, grouped by sector.
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
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPositions.map((position, index) => (
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
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Sector
                        </p>
                        <p className="text-sm text-black font-medium">
                          {position.sector}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-white text-black border-black">
                      {position.sector}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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