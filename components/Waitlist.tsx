"use client";
import { FormEvent, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function Waitlist() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const first_name = formData.get('firstName');
    const last_name = formData.get('lastName');
    const email = formData.get('email');
    const role = formData.get('userType');
    const interest = formData.get('interest');

    const { error } = await supabase
      .from('waitlist')
      .insert([
        { first_name, last_name, email, role, interest, source: 'lunate' }
      ]);

    if (error) {
      if (error.code === '23505') {
        setState('duplicate');
      } else {
        console.error(error);
        setState('error');
      }
    } else {
      form.reset();
      setState('success');
    }
  }

  return (
    <section className="waitlist section" id="waitlist">
      <div className="container waitlist-grid">
        <div>
          <p className="eyebrow">Early access</p>
          <h2>Be among the first to experience your own Mirra Call.</h2>
          <p>Mirra Call is currently in development. Join the waitlist for product updates, pilot opportunities, and early access.</p>
        </div>
        <form onSubmit={submit} aria-describedby="form-status">
          <div className="form-row">
            <label>First name<input name="firstName" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
          </div>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>I am a…
            <select name="userType" defaultValue="">
              <option value="" disabled>Select one (optional)</option>
              <option>Patient / user</option>
              <option>Caregiver</option>
              <option>Occupational therapist</option>
              <option>Physiotherapist</option>
              <option>Clinician</option>
              <option>Researcher</option>
              <option>Healthcare organization</option>
              <option>Other</option>
            </select>
          </label>
          <label>What interests you about Mirra Call?<textarea name="interest" rows={3}></textarea></label>
          <button className="button" type="submit" disabled={state === 'loading'}>
            {state === 'loading' ? 'Joining…' : 'Join the waitlist'}
          </button>
          <p id="form-status" className={`form-status ${state}`} aria-live="polite">
            {state === 'success' && 'Thanks for joining the waitlist!'}
            {state === 'error' && 'Something went wrong. Please try again.'}
            {state === 'duplicate' && "You're already on the list!"}
          </p>
          <p className="form-note">Look forward to connecting!.</p>
        </form>
      </div>
    </section>
  );
}
