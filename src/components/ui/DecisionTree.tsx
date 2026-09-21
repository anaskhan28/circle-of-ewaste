import { cn } from "@/lib/utils";

interface DecisionNode {
  question?: string;
  answer?: string;
  outcome?: string;
  color?: string;
  yes?: DecisionNode;
  no?: DecisionNode;
}

interface DecisionTreeProps {
  className?: string;
}

const TREE: DecisionNode = {
  question: "Is the device working?",
  yes: {
    answer: "YES",
    question: "Is there internal need?",
    yes: {
      answer: "YES",
      outcome: "Redeploy / Internal Reuse",
      color: "#1264C4",
    },
    no: {
      answer: "NO",
      outcome: "Resale / Buyback",
      color: "#1598E8",
    },
  },
  no: {
    answer: "NO",
    question: "Can it be refurbished?",
    yes: {
      answer: "YES",
      outcome: "Refurbishment → Resale",
      color: "#168A3A",
    },
    no: {
      answer: "NO",
      question: "Are there recoverable parts?",
      yes: {
        answer: "YES",
        outcome: "Component Recovery",
        color: "#62B92E",
      },
      no: {
        answer: "NO",
        outcome: "Responsible Recycling",
        color: "#0B3B82",
      },
    },
  },
};

function NodeBox({ node, depth = 0 }: { node: DecisionNode; depth?: number }) {
  if (node.outcome) {
    return (
      <div
        className="px-5 py-3 rounded-xl text-white text-sm font-bold text-center shadow-md min-w-[160px]"
        style={{ backgroundColor: node.color || "#1264C4" }}
        role="status"
        aria-label={`Outcome: ${node.outcome}`}
      >
        {node.outcome}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Question box */}
      <div className="bg-white border-2 border-brand-blue/20 rounded-2xl px-5 py-3 text-center max-w-[220px] shadow-card">
        <p className="text-sm font-semibold text-dark">{node.question}</p>
      </div>

      {/* Branches */}
      {(node.yes || node.no) && (
        <div className="flex gap-8 md:gap-16 mt-0">
          {/* YES branch */}
          {node.yes && (
            <div className="flex flex-col items-center gap-0">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-brand-green/40" />
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider px-2 py-0.5 bg-very-light-green rounded-full">
                  {node.yes.answer || "YES"}
                </span>
                <div className="w-0.5 h-5 bg-brand-green/40" />
              </div>
              <NodeBox node={node.yes} depth={depth + 1} />
            </div>
          )}

          {/* NO branch */}
          {node.no && (
            <div className="flex flex-col items-center gap-0">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 bg-muted/30" />
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider px-2 py-0.5 bg-gray-100 rounded-full">
                  {node.no.answer || "NO"}
                </span>
                <div className="w-0.5 h-5 bg-muted/30" />
              </div>
              <NodeBox node={node.no} depth={depth + 1} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function DecisionTree({ className }: DecisionTreeProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="md:hidden text-center mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold">
          Scroll horizontally to view flow →
        </span>
      </div>
      <div
        className="overflow-x-auto py-4 px-2 -mx-4 sm:mx-0 rounded-2xl bg-white border border-gray-100 shadow-sm"
        role="group"
        aria-label="Asset value recovery decision tree"
      >
        <div className="flex justify-center min-w-[660px]">
          <NodeBox node={TREE} />
        </div>
      </div>
    </div>
  );
}
