export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      claims: {
        Row: {
          adjuster_email: string | null
          adjuster_name: string | null
          adjuster_phone: string | null
          claim_number: string
          coverage_amount: number | null
          created_at: string | null
          date_of_loss: string | null
          deductible: number | null
          id: string
          insurance_company: string | null
          loss_type: string | null
          policy_number: string | null
          project_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          adjuster_email?: string | null
          adjuster_name?: string | null
          adjuster_phone?: string | null
          claim_number: string
          coverage_amount?: number | null
          created_at?: string | null
          date_of_loss?: string | null
          deductible?: number | null
          id?: string
          insurance_company?: string | null
          loss_type?: string | null
          policy_number?: string | null
          project_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          adjuster_email?: string | null
          adjuster_name?: string | null
          adjuster_phone?: string | null
          claim_number?: string
          coverage_amount?: number | null
          created_at?: string | null
          date_of_loss?: string | null
          deductible?: number | null
          id?: string
          insurance_company?: string | null
          loss_type?: string | null
          policy_number?: string | null
          project_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "claims_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      client_users: {
        Row: {
          client_id: string
          created_at: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          client_id: string
          created_at?: string | null
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          client_id?: string
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_users_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          city: string | null
          contact_person: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          state: string | null
          status: string | null
          updated_at: string | null
          workspace_id: string
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact_person?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          workspace_id: string
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          contact_person?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          state?: string | null
          status?: string | null
          updated_at?: string | null
          workspace_id?: string
          zip_code?: string | null
        }
        Relationships: []
      }
      estimate_line_items: {
        Row: {
          approval_status: string | null
          approved_amount: number | null
          category: string | null
          created_at: string | null
          description: string
          estimate_id: string | null
          id: string
          item_code: string | null
          notes: string | null
          quantity: number
          submitted_amount: number
          total_amount: number
          unit: string | null
          unit_price: number
        }
        Insert: {
          approval_status?: string | null
          approved_amount?: number | null
          category?: string | null
          created_at?: string | null
          description: string
          estimate_id?: string | null
          id?: string
          item_code?: string | null
          notes?: string | null
          quantity: number
          submitted_amount: number
          total_amount: number
          unit?: string | null
          unit_price: number
        }
        Update: {
          approval_status?: string | null
          approved_amount?: number | null
          category?: string | null
          created_at?: string | null
          description?: string
          estimate_id?: string | null
          id?: string
          item_code?: string | null
          notes?: string | null
          quantity?: number
          submitted_amount?: number
          total_amount?: number
          unit?: string | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "estimate_line_items_estimate_id_fkey"
            columns: ["estimate_id"]
            isOneToOne: false
            referencedRelation: "estimates"
            referencedColumns: ["id"]
          },
        ]
      }
      estimates: {
        Row: {
          approved_amount: number | null
          claim_id: string | null
          created_at: string | null
          estimate_number: string | null
          estimate_type: string
          id: string
          notes: string | null
          status: string | null
          submission_date: string
          submitted_by: string | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          approved_amount?: number | null
          claim_id?: string | null
          created_at?: string | null
          estimate_number?: string | null
          estimate_type: string
          id?: string
          notes?: string | null
          status?: string | null
          submission_date: string
          submitted_by?: string | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          approved_amount?: number | null
          claim_id?: string | null
          created_at?: string | null
          estimate_number?: string | null
          estimate_type?: string
          id?: string
          notes?: string | null
          status?: string | null
          submission_date?: string
          submitted_by?: string | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estimates_claim_id_fkey"
            columns: ["claim_id"]
            isOneToOne: false
            referencedRelation: "claims"
            referencedColumns: ["id"]
          },
        ]
      }
      estimating_services: {
        Row: {
          city: string | null
          created_at: string
          email: string | null
          id: string
          is_insurance_claim: boolean | null
          message: string | null
          name: string | null
          phone: string | null
          service: string | null
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      macro_tags: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      macros: {
        Row: {
          created_at: string
          id: number
          macro_text: string | null
          macro_type: string | null
          tag_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          macro_text?: string | null
          macro_type?: string | null
          tag_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          macro_text?: string | null
          macro_type?: string | null
          tag_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "macros_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "macro_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      packout_services: {
        Row: {
          booking_date: string | null
          city: string | null
          claim_email: string | null
          claim_name: string | null
          claim_phone: string | null
          contractor_email: string | null
          contractor_name: string | null
          contractor_phone: string | null
          created_at: string
          id: string
          is_insurance_claim: boolean | null
          message: string | null
          service: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          booking_date?: string | null
          city?: string | null
          claim_email?: string | null
          claim_name?: string | null
          claim_phone?: string | null
          contractor_email?: string | null
          contractor_name?: string | null
          contractor_phone?: string | null
          created_at?: string
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          booking_date?: string | null
          city?: string | null
          claim_email?: string | null
          claim_name?: string | null
          claim_phone?: string | null
          contractor_email?: string | null
          contractor_name?: string | null
          contractor_phone?: string | null
          created_at?: string
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      production_services: {
        Row: {
          city: string | null
          created_at: string
          email: string | null
          id: string
          is_insurance_claim: boolean | null
          message: string | null
          name: string | null
          phone: string | null
          service: string | null
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_insurance_claim?: boolean | null
          message?: string | null
          name?: string | null
          phone?: string | null
          service?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          address: string | null
          client_email: string | null
          client_id: string | null
          client_name: string | null
          client_own: boolean | null
          client_owner_name: string | null
          client_phone: string | null
          created_at: string | null
          created_by: string | null
          end_date: string | null
          id: string
          insurance_adjuster: string | null
          insurance_carrier: string | null
          insurance_claim_number: string | null
          insurance_info: string | null
          job_date: string | null
          job_name: string | null
          job_time: string | null
          jobsite_address: string | null
          location: string | null
          name: string | null
          project_type: Database["public"]["Enums"]["project_type"] | null
          service: string | null
          site_address: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["project_status"] | null
          team_size: number | null
          technician: string | null
          technician_phone: string | null
          updated_at: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          address?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          client_own?: boolean | null
          client_owner_name?: string | null
          client_phone?: string | null
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: string
          insurance_adjuster?: string | null
          insurance_carrier?: string | null
          insurance_claim_number?: string | null
          insurance_info?: string | null
          job_date?: string | null
          job_name?: string | null
          job_time?: string | null
          jobsite_address?: string | null
          location?: string | null
          name?: string | null
          project_type?: Database["public"]["Enums"]["project_type"] | null
          service?: string | null
          site_address?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          team_size?: number | null
          technician?: string | null
          technician_phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          address?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          client_own?: boolean | null
          client_owner_name?: string | null
          client_phone?: string | null
          created_at?: string | null
          created_by?: string | null
          end_date?: string | null
          id?: string
          insurance_adjuster?: string | null
          insurance_carrier?: string | null
          insurance_claim_number?: string | null
          insurance_info?: string | null
          job_date?: string | null
          job_name?: string | null
          job_time?: string | null
          jobsite_address?: string | null
          location?: string | null
          name?: string | null
          project_type?: Database["public"]["Enums"]["project_type"] | null
          service?: string | null
          site_address?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
          team_size?: number | null
          technician?: string | null
          technician_phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_projects_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      scope_suggestions: {
        Row: {
          created_at: string
          generated_by: string | null
          id: string
          json_line_items: Json | null
          project_id: string | null
        }
        Insert: {
          created_at?: string
          generated_by?: string | null
          id?: string
          json_line_items?: Json | null
          project_id?: string | null
        }
        Update: {
          created_at?: string
          generated_by?: string | null
          id?: string
          json_line_items?: Json | null
          project_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scope_suggestions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      supplements: {
        Row: {
          amount: number | null
          created_at: string
          id: number
          line_items: Json | null
          mcp_uuid: string | null
          project_id: string | null
          status: Database["public"]["Enums"]["project_status"] | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: number
          line_items?: Json | null
          mcp_uuid?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: number
          line_items?: Json | null
          mcp_uuid?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["project_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "supplements_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          address: string | null
          contact: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
        }
        Insert: {
          address?: string | null
          contact?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
        }
        Update: {
          address?: string | null
          contact?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      workspace_members: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_roles"] | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_roles"] | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          industry_type: string | null
          name: string | null
          slug: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          industry_type?: string | null
          name?: string | null
          slug?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          industry_type?: string | null
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_client_role: {
        Args: { target_client_id: string }
        Returns: string
      }
      get_user_workspace_role: {
        Args: { workspace_id: string }
        Returns: string
      }
    }
    Enums: {
      project_status:
        | "Active"
        | "Completed"
        | "On Hold"
        | "Cancelled"
        | "Not Started"
        | "Upcoming"
        | "Pending"
        | "Overdue"
        | "Priority"
        | "On Track"
        | "At Risk"
        | "Off Track"
        | "Blocked"
      project_type: "demo_mit" | "packout" | "storage" | "rebuild"
      user_roles: "admin" | "estimator" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      project_status: [
        "Active",
        "Completed",
        "On Hold",
        "Cancelled",
        "Not Started",
        "Upcoming",
        "Pending",
        "Overdue",
        "Priority",
        "On Track",
        "At Risk",
        "Off Track",
        "Blocked",
      ],
      project_type: ["demo_mit", "packout", "storage", "rebuild"],
      user_roles: ["admin", "estimator", "viewer"],
    },
  },
} as const
