const ticketStatuses = [
  { code: "draft", label: "\u0E23\u0E48\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23", group: "requester" },
  { code: "pending_approval", label: "\u0E23\u0E2D\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34", group: "requester" },
  { code: "rejected", label: "\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34", group: "requester" },
  { code: "revised", label: "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E15\u0E35\u0E01\u0E25\u0E31\u0E1A", group: "requester" },
  { code: "approved", label: "\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27", group: "requester" },
  { code: "submitted_it", label: "\u0E2A\u0E48\u0E07\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E43\u0E2B\u0E49 IT \u0E41\u0E25\u0E49\u0E27", group: "requester" },
  { code: "it_received", label: "IT \u0E23\u0E31\u0E1A\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E49\u0E27", group: "it" },
  { code: "in_queue", label: "\u0E23\u0E2D\u0E04\u0E34\u0E27\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23", group: "it" },
  { code: "assigned", label: "\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E0A\u0E48\u0E32\u0E07/\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A", group: "it" },
  { code: "in_progress", label: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E0B\u0E48\u0E2D\u0E21", group: "it" },
  { code: "on_hold", label: "\u0E23\u0E2D\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23", group: "it" },
  { code: "waiting_user", label: "\u0E23\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A", group: "it" },
  { code: "waiting_parts", label: "\u0E23\u0E2D\u0E2D\u0E30\u0E44\u0E2B\u0E25\u0E48", group: "it" },
  { code: "completed", label: "IT \u0E0B\u0E48\u0E2D\u0E21\u0E40\u0E2A\u0E23\u0E47\u0E08", group: "after_fix" },
  { code: "user_confirmation", label: "\u0E23\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E23\u0E27\u0E08\u0E23\u0E31\u0E1A", group: "after_fix" },
  { code: "closed", label: "\u0E1B\u0E34\u0E14\u0E07\u0E32\u0E19", group: "after_fix" },
  { code: "cancelled", label: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", group: "exception" },
  { code: "not_fixable", label: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E0B\u0E48\u0E2D\u0E21\u0E44\u0E14\u0E49", group: "exception" },
  { code: "replaced", label: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E43\u0E2B\u0E21\u0E48", group: "exception" },
  { code: "duplicate", label: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E0B\u0E49\u0E33", group: "exception" },
  { code: "invalid", label: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07", group: "exception" },
  { code: "escalated", label: "\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D/\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E16\u0E31\u0E14\u0E44\u0E1B", group: "exception" }
];
function getStatusLabel(code) {
  const s = ticketStatuses.find((i) => i.code === code);
  return s ? s.label : code || "";
}
function getStatusGroup(code) {
  const s = ticketStatuses.find((i) => i.code === code);
  return s ? s.group : null;
}

export { getStatusLabel as a, getStatusGroup as g, ticketStatuses as t };
