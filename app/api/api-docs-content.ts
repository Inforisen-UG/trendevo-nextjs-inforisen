export type ApiParamRow = {
  name: string;
  description: string;
};

export type ApiParamGroup = {
  label?: string;
  rows: ApiParamRow[];
};

export type ApiEndpoint = {
  id: string;
  title: string;
  paramGroups: ApiParamGroup[];
  exampleLabel?: string;
  exampleCode: string;
};

export const apiOverviewRows = [
  { label: 'HTTP Method', value: 'POST' },
  { label: 'API URL', valueKey: 'apiUrl' as const },
  { label: 'Response format', value: 'JSON' },
];

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: 'service-list',
    title: 'Service list',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'services' },
        ],
      },
    ],
    exampleLabel: 'Example response',
    exampleCode: `[
    {
        "service": 1,
        "name": "Followers",
        "type": "Default",
        "category": "First Category",
        "rate": "0.90",
        "min": "50",
        "max": "10000",
        "refill": true,
        "cancel": true
    },
    {
        "service": 2,
        "name": "Comments",
        "type": "Custom Comments",
        "category": "Second Category",
        "rate": "8",
        "min": "10",
        "max": "1500",
        "refill": false,
        "cancel": true
    }
]`,
  },
  {
    id: 'add-order',
    title: 'Add order',
    paramGroups: [
      {
        label: 'Default',
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'add' },
          { name: 'service', description: 'Service ID' },
          { name: 'link', description: 'Link to page' },
          { name: 'quantity', description: 'Needed quantity' },
          { name: 'runs (optional)', description: 'Runs to deliver' },
          { name: 'interval (optional)', description: 'Interval in minutes' },
        ],
      },
      {
        label: 'Package',
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'add' },
          { name: 'service', description: 'Service ID' },
          { name: 'link', description: 'Link to page' },
        ],
      },
      {
        label: 'Custom comments',
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'add' },
          { name: 'service', description: 'Service ID' },
          { name: 'link', description: 'Link to page' },
          { name: 'comments', description: 'Comments list separated by \\r\\n or \\n' },
        ],
      },
      {
        label: 'Mentions custom list',
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'add' },
          { name: 'service', description: 'Service ID' },
          { name: 'link', description: 'Link to page' },
          { name: 'comments', description: 'Comments list separated by \\r\\n or \\n' },
        ],
      },
      {
        label: 'Poll',
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'add' },
          { name: 'service', description: 'Service ID' },
          { name: 'link', description: 'Link to page' },
          { name: 'quantity', description: 'Needed quantity' },
          { name: 'answer_number', description: 'Answer number of the poll' },
        ],
      },
    ],
    exampleCode: `{
    "order": 23501
}`,
  },
  {
    id: 'order-status',
    title: 'Order status',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'status' },
          { name: 'order', description: 'Order ID' },
        ],
      },
    ],
    exampleCode: `{
    "charge": "0.27819",
    "start_count": "3572",
    "status": "Partial",
    "remains": "157",
    "currency": "USD"
}`,
  },
  {
    id: 'multiple-orders-status',
    title: 'Multiple orders status',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'status' },
          {
            name: 'orders',
            description: 'Order IDs (separated by a comma, up to 100 IDs)',
          },
        ],
      },
    ],
    exampleCode: `{
    "1": {
        "charge": "0.27819",
        "start_count": "3572",
        "status": "Partial",
        "remains": "157",
        "currency": "USD"
    },
    "10": {
        "error": "Incorrect order ID"
    },
    "100": {
        "charge": "1.44219",
        "start_count": "234",
        "status": "In progress",
        "remains": "10",
        "currency": "USD"
    }
}`,
  },
  {
    id: 'create-refill',
    title: 'Create refill',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'refill' },
          { name: 'order', description: 'Order ID' },
        ],
      },
    ],
    exampleCode: `{
    "refill": "1"
}`,
  },
  {
    id: 'create-multiple-refill',
    title: 'Create multiple refill',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'refill' },
          {
            name: 'orders',
            description: 'Order IDs (separated by a comma, up to 100 IDs)',
          },
        ],
      },
    ],
    exampleCode: `[
    {
        "order": 1,
        "refill": 1
    },
    {
        "order": 2,
        "refill": 2
    },
    {
        "order": 3,
        "refill": {
            "error": "Incorrect order ID"
        }
    }
]`,
  },
  {
    id: 'get-refill-status',
    title: 'Get refill status',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'refill_status' },
          { name: 'refill', description: 'Refill ID' },
        ],
      },
    ],
    exampleCode: `{
    "status": "Completed"
}`,
  },
  {
    id: 'get-multiple-refill-status',
    title: 'Get multiple refill status',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'refill_status' },
          {
            name: 'refills',
            description: 'Refill IDs (separated by a comma, up to 100 IDs)',
          },
        ],
      },
    ],
    exampleCode: `[
    {
        "refill": 1,
        "status": "Completed"
    },
    {
        "refill": 2,
        "status": "Rejected"
    },
    {
        "refill": 3,
        "status": {
            "error": "Refill not found"
        }
    }
]`,
  },
  {
    id: 'create-cancel',
    title: 'Create cancel',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'cancel' },
          {
            name: 'orders',
            description: 'Order IDs (separated by a comma, up to 100 IDs)',
          },
        ],
      },
    ],
    exampleCode: `[
    {
        "order": 9,
        "cancel": {
            "error": "Incorrect order ID"
        }
    },
    {
        "order": 2,
        "cancel": 1
    }
]`,
  },
  {
    id: 'user-balance',
    title: 'User balance',
    paramGroups: [
      {
        rows: [
          { name: 'key', description: 'Your API key' },
          { name: 'action', description: 'balance' },
        ],
      },
    ],
    exampleCode: `{
    "balance": "100.84292",
    "currency": "USD"
}`,
  },
];
